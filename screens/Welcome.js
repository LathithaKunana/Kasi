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
    const {name, email} = route;

    return (
        
            <>
                <StatusBar style = 'light' />
                {/**/}
                <InnerContainer>
                    <WelcomeContainer>
                        <StyledFormArea>
                            <Avatar resizeMode = 'cover' source = {require('./../assets/ekasi-dark.png')} />
                                <Line />
                                <StyledButton onPress={() =>{
                                    A
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