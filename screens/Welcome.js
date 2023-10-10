import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";

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
import SearchBar from "../components/SearchBar";
import Catergories from "../components/Catergories";
import ResturantItem from "../components/ResturantItem";



const Welcome = ({navigation , route}) => {
    const {name, email} = route;

    return (
        
            <>
                <StatusBar style = 'dark' />
                {/**/}
                
                <InnerContainer >
                    <SearchBar />
                        <Catergories />
                        <ResturantItem />
                            <StyledFormArea>
                                {/*<Avatar resizeMode = 'cover' source = {require('./../assets/ekasi-dark.png')} /><Line />
                                */}
                                    <StyledButton onPress={ () => {
                                        AsyncStorage.setItem('keepLoggedIn', JSON.stringify(false))
                                        navigation.navigate("Login")
                                    }} >
                                        <ButtonText>
                                            Logout
                                        </ButtonText>
                                    </StyledButton>
                                </StyledFormArea>
                </InnerContainer>
                
            </>
    );
};

const styles = StyleSheet.create({
    ios: {
        paddingTop: Platform.OS === 'ios'? 40: 20
    }
})


export default Welcome;