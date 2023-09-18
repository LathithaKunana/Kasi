import React, {useState} from "react";
import { StatusBar } from "react-native";
import { Formik } from "formik";
import { View } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";

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
    Colors
} from './../components/styles';

const {brand, darkLight} = Colors;

const Login = () => {
    const [hidePassword, setPassword] = useState(true);


    return (
        <StyedContainer>
            <StatusBar style = 'dark' />
            <InnerContainer>
                <PageLogo resizeMode = 'cover' source = {require('./../assets/ekasi-dark.png')} />
                <PageTitle>eKasi</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '' , password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{ ({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                  <MyTextInput
                    label='Email Address'
                    icon = 'mail'
                    placeholder = 'email'
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
                    secureTextEntry= {true}
                    isPassword={true}
                  />
                </StyledFormArea>)} 
                </Formik>
            </InnerContainer>
        </StyedContainer>
    );
};

const MyTextInput = ({label, icon,isPassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputlabel>{label}</StyledInputlabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon>
                    <Ionicons size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;