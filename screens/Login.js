import React, { useState } from "react";
import { KeyboardAvoidingView, StatusBar, Platform } from "react-native";
import { Formik } from "formik";
import { View, ActivityIndicator } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import axios from "axios";
import * as GoogleSignIn from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
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






const { brand, darkLight, primary } = Colors;

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null)
    const url = "https://login-server.up.railway.app/user/signin";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          AsyncStorage.setItem('keepLoggedIn', JSON.stringify(true))
          handleMessage(message, status);
        } else {
          navigation.navigate("Welcome", { ...data[0] });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.JSON());
        setSubmitting(false);
        handleMessage("An error occurred check your network and try again");
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  const getGoogleConfig = async () => {

    const redirectPath = "/Kasi/Welcome"; // Specify your own redirect path
    const redirectUrl = `${{ useProxy: true }}${redirectPath}`;

    const androidClientId = "680648998571-j2fsnki0op4ec3ri4uqab880tdj0r35k.apps.googleusercontent.com"; // Replace with your Android client ID
    const iosClientId = "680648998571-nc6j5l4ptmakc52bquvetij0bb6uo2hi.apps.googleusercontent.com"; // Replace with your iOS client ID
    
    const config = {
      clientId: Platform.OS === "ios" ? iosClientId : androidClientId,
      redirectUrl: redirectUrl,
      scopes: ["profile", "email"],
    };
    return config;
  };
  

  const handleGoogleSignin = async () => {
    setGoogleSubmitting(true);
    try {
       await GoogleSignIn.a(getGoogleConfig());
       const result = await GoogleSignIn.signIn();
       if (result.status === "success") {
         const { user } = result;
         const { email, name, photoUrl } = user;
         console.log("Google sign-in successful");
         console.log("Email:", email);
         console.log("Name:", name);
         console.log("Photo URL:", photoUrl);
   
         // Send a request to your server with the user's information
         const response = await fetch('https://login-server.up.railway.app/user/signin', {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ email, name, photoUrl }),
         });
   
         // Check the response status and handle any errors
         if (!response.ok) {
           const errorData = await response.json();
           console.log("Error:", errorData);
           handleMessage("An error occurred while signing in with Google");
         } else {
           const data = await response.json();
           navigation.navigate("Welcome", { ...data });
         }
       }
    } catch (error) {
       console.log(error);
       handleMessage("An error occurred while signing in with Google");
    } finally {
       setGoogleSubmitting(false);
    }
   };
  

  return (
    <KeyboardAvoidingWrapper>
      <StyedContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require("./../assets/ekasi-light.png")} />
          <PageTitle></PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email === '' || values.password === '') {
                handleMessage('Please fill in all fields');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  label='Email Address'
                  icon='mail'
                  placeholder='email'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />

                <MyTextInput
                  label='Password'
                  icon='lock'
                  placeholder='Enter your password'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <Line />

                

                {!googleSubmitting && (
                    <StyledButton google={true} onPress={handleGoogleSignin}>
                        <Fontisto name="google" size={20} color={primary} />
                        <ButtonText google={true}>Sign in with Google</ButtonText>
                    </StyledButton>
                )}

                {googleSubmitting && (
                    <StyledButton google={true} disabled={true}>
                        <ActivityIndicator size= 'large' color={primary}/>
                  </StyledButton>
                )}

                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Signup")}>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyedContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputlabel>{label}</StyledInputlabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
