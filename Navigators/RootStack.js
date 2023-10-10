import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import { Colors } from '../components/styles';

const {primary, tertiary} = Colors;

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor : tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    },
                }}
                initialRouteName='Login'
                
            >
                <Stack.Screen name="Login" component={Login}  />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen options={{headerTintColor: primary, headerLeft: null}} name="Welcome" component={Welcome} />
            </Stack.Navigator>
        
    )
}
const AppStack = () => {
    return (
        
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor : tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    },
                    
                }}
                initialRouteName='Welcome'
                
            >
                <Stack.Screen name="Login" component={Login} options={{headerLeft: null}}/>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen options={{headerTintColor: primary,headerLeft: null}} name="Welcome" component={Welcome} />
            </Stack.Navigator>
        
    )
}

export {AuthStack, AppStack};