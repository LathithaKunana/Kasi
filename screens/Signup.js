import React, {useState} from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { Formik } from "formik";
import { View } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

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


    return (
        <KeyboardAvoidingWrapper>
            <StyedContainer>
               
                <StatusBar style = 'dark' />
                <InnerContainer>
                    
                        <PageLogo  resizeMode="cover" source = {require('./../assets/ekasi-light.png')} />
                        {/*<PageTitle>eKasi</PageTitle>*/}
                        <SubTitle>Account Signup</SubTitle>

                        <Formik
                            initialValues={{email: '' , password: ''}}
                            onSubmit={(values) => {
                                console.log(values);
                                navigation.navigate("Welcome");
                            }}
                        >{ ({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput
                            label='Full Name'
                            icon = 'person'
                            placeholder = 'Your name'
                            placeholderTextColor = {darkLight}
                            onChangeText= {handleChange('fullName')}
                            onBlur= {handleBlur('fullName')}
                            value= {values.fullName}
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
                            onChangeText= {handleChange('password')}
                            onBlur= {handleBlur('password')}
                            value= {values.confirmpassword}
                            secureTextEntry= {hidePassword}
                            isPassword={true}
                            hidePassword= {hidePassword}
                            setHidePassword= {setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        
                        <StyledButton onPress={handleSubmit} >
                            <ButtonText>
                                Signup
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        {/*<StyledButton google={true} onPress={handleSubmit} >
                            <Fontisto name="google" size={20} color={primary} />
                            <ButtonText google={true}>
                                Sign in with google
                            </ButtonText>
                        </StyledButton>*/}
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