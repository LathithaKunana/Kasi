import React, {useState} from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { Formik } from "formik";
import { View , ActivityIndicator} from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


//aoi client
import axios from "axios";

import {
    StyedContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputlabel,
    StyledButton,
    StyledTextInput,
    RightIcon,
    Colors,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();


    //form handling
    const handleSignup = (credentials, setSubmitting ) => {
        handleMessage(null)
        const url = "https://login-server.up.railway.app/user/signup";

        axios
            .post(url, credentials)
            .then((response) =>{
                const result = response.data;
                const {message, status, data} = result;

                if(status !== 'SUCCESS') {
                    handleMessage(message, status);
                } else{
                    navigation.navigate('Welcome', {...data});
                }
                setSubmitting(false)
            })
            .catch(error => {
                console.log(error.JSON());
                setSubmitting(false)
                handleMessage("An error occurred check your natwork and try again");
            })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyedContainer>
               
                <StatusBar style = 'dark' />
                <InnerContainer>
                    
                        <PageLogo  resizeMode="cover" source = {require('./../assets/ekasi-light.png')} />
                        {/*<PageTitle>eKasi</PageTitle>*/}
                        <SubTitle>Account Signup</SubTitle>

                        <Formik
                            initialValues={{email: '' , password: '', name: '', confirmPassword : ''}}
                            onSubmit={(values, {setSubmitting}) => {
                                if(values.email == '' || 
                                values.password == '' || 
                                values.name == '' || 
                                values.confirmPassword == '' 
                                ) {
                                    handleMessage('Please fil in all fields');
                                    setSubmitting(false)
                                   } else if(values.password !== values.confirmPassword) {
                                    handleMessage('Password do not match');
                                    setSubmitting(false)
                                   }else {
                                        handleSignup(values, setSubmitting)
                                   }
                            }}
                        >{ ({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput
                            label='Full Name'
                            icon = 'person'
                            placeholder = 'Your name'
                            placeholderTextColor = {darkLight}
                            onChangeText= {handleChange('name')}
                            onBlur= {handleBlur('name')}
                            value= {values.name}
                        />

                        <MyTextInput
                            label='Email Address'
                            icon = 'mail'
                            placeholder = 'Email'
                            placeholderTextColor = {darkLight}
                            onChangeText= {handleChange('email')}
                            onBlur= {handleBlur('email')}
                            value= {values.email}
                            keyboardType = 'email-address'
                        />



                        <MyTextInput
                            label='Password'
                            icon = 'lock'
                            placeholder = 'Enter your password'
                            placeholderTextColor = {darkLight}
                            onChangeText= {handleChange('password')}
                            onBlur= {handleBlur('password')}
                            value= {values.password}
                            secureTextEntry= {hidePassword}
                            isPassword={true}
                            hidePassword= {hidePassword}
                            setHidePassword= {setHidePassword}
                        />

                        <MyTextInput
                            label='Confirm Password'
                            icon = 'lock'
                            placeholder = 'Enter your password'
                            placeholderTextColor = {darkLight}
                            onChangeText= {handleChange('confirmPassword')}
                            onBlur= {handleBlur('confirmPassword')}
                            value= {values.confirmPassword}
                            secureTextEntry= {hidePassword}
                            isPassword={true}
                            hidePassword= {hidePassword}
                            setHidePassword= {setHidePassword}
                        />
                        <MsgBox type= {messageType}>{message}</MsgBox>
                        
                        {!isSubmitting &&<StyledButton onPress={handleSubmit} >
                            <ButtonText>
                                Signup
                            </ButtonText>
                        </StyledButton>}

                        {isSubmitting &&<StyledButton disabled={true}>
                            <ActivityIndicator size= "large" color={primary} />
                        </StyledButton>}

                        <Line />
    
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Login")}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                        </StyledFormArea>)} 
                        </Formik>
                    
                </InnerContainer>
            </StyedContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputlabel>{label}</StyledInputlabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'}  size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;