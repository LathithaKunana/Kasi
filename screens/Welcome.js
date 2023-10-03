import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from "react-native";

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderTabs from "../components/HeaderTabs";



const Welcome = ({navigation , route}) => {
    const {name, email} = route;

    return (
        
            <>
                <StatusBar style = 'dark' />
                {/**/}
                <SafeAreaView />
                <InnerContainer>
                    <WelcomeContainer>
                        <HeaderTabs />
                        <StyledFormArea>
                            <Avatar resizeMode = 'cover' source = {require('./../assets/ekasi-dark.png')} />
                                <Line />
                                <StyledButton onPress={ async () =>{
                                    await AsyncStorage.setItem('keepLoggedIn', JSON.stringify(false))
                                    await navigation.navigate("Login")
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