import React from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';



const Welcome = ({navigation , route}) => {
    const {name, email} = route.params;

    return (
        
            <>
                <StatusBar style = 'light' />
                <InnerContainer>
                    <WelcomeImage resizeMode = 'cover' source = {require('./../assets/img2.png')}/>
                    <WelcomeContainer>
                        <PageTitle welcome = {true}>Welcome!</PageTitle>
                        <SubTitle welcome = {true}>{name || "Lathitha Kunana"}</SubTitle>
                        <SubTitle welcome = {true}>{email || "blahblaha@gail.com"}</SubTitle>
                        <StyledFormArea>
                            <Avatar resizeMode = 'cover' source = {require('./../assets/ekasi-dark.png')} />
                                <Line />
                                <StyledButton onPress={() =>{
                                    navigation.navigate("Login")
                                }} >
                                    <ButtonText>
                                        Logout
                                    </ButtonText>
                                </StyledButton>
                        </StyledFormArea> 
                    </WelcomeContainer>
                </InnerContainer>
            </>
    );
};


export default Welcome;