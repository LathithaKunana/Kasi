import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

import RootStack from './Navigators/RootStack';

export default function App() {
  return <RootStack />;
};

  

