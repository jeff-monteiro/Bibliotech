import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/login';
import Catalog from './src/screens/catalog';
import Readingscreen from './src/screens/readingscreen';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/> 
        <Stack.Screen name='Catalog' component={Catalog} options={{ headerShown: false}} />
        <Stack.Screen name='Readingscreen' component={Readingscreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


