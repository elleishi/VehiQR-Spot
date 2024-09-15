import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './LoginScreen';
import QrCodeScan from './Pages/Security/qrCodeScanner';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <StatusBar style="auto" />

      <Stack.Navigator>
          <Stack.Screen name="QR Code Scanner" component={QrCodeScan} options={{ headerShown: false }} /> 
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

      </NavigationContainer>
  );
};

export default App;
