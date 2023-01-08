/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './components/pages/HomeScreen';
import SelectShoes from './components/pages/SelectShoes';
import { StyleSheet, Text, View, Pressable, SafeAreaView, Button} from "react-native";
import SelectShirts from './components/pages/SelectShirts';
import SelectPants from './components/pages/SelectPants';
import Success from './components/pages/Success';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Application' component={HomeScreen}/>
        <Drawer.Screen name='Select Shoes' component={SelectShoes}/>
        <Drawer.Screen name='Select Pants' component={SelectPants}/>
        <Drawer.Screen name='Select Shirts' component={SelectShirts}/>
      </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#2EBC4A"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;