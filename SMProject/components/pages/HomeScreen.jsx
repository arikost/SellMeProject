import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Button} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { increment } from '../../redux/ducks/counter';

const HomeScreen = ({navigation}) => {
    const setStatus = useSelector((state) => state.counter.currentSetStetus);
    const complatedSets = useSelector((state) => state.counter.total);
    return ( 
        <View style={styles.container}>
       
          <Text style={styles.title}>{"Set Status: "+setStatus+"/3"}</Text>
          <Text style={styles.title}>{"Complated Sets: "+complatedSets}</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    title: {
      marginTop: 10,
      paddingVertical: 8,
      
      color: "#20232a",
      textAlign: "left",
      fontSize: 20,
      fontWeight: "bold"
    }
  });
  
export default HomeScreen;