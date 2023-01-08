/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/pages/HomeScreen';
import Success from './components/pages/Success';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name='Application' component={HomeScreen}/>
        <Stack.Screen name='Success' component={Success}/>
      </Stack.Navigator>
  );
}

export default App;