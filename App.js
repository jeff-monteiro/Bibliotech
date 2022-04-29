import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/login';
import Catalog from './src/screens/catalog';
import CheckOut from './src/screens/checkout';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/> 
        <Stack.Screen name='Catalog' component={Catalog} options={{ headerShown: false}} />
        <Stack.Screen name='CheckOut' component={CheckOut} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


