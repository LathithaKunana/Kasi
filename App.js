
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStack , AppStack} from './Navigators/RootStack'


export default function App() {
  const [isLogged, setIsLogged] = useState(null);
  const fetchData = async () => {
      try {
        
        await AsyncStorage.clear();

        AsyncStorage.setItem('keepLoggedIn', JSON.stringify(true));
        
        const userData = await AsyncStorage.getItem('keepLoggedIn');    
        console.log(userData)
        setIsLogged(userData)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
 useEffect(() => {
    fetchData();
 }, []);

 return (
  <NavigationContainer>
    { isLogged? (<AppStack  />) : (<AuthStack />)}
  </NavigationContainer>
 );
}

