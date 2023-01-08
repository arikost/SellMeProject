import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { getItems } from '../../redux/ducks/items';

const SelectShoes = ({navigation}) => {
    const setStatus = useSelector((state) => state.counter.currentSetStetus);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getItems());
    }, [dispatch]);
    const items = useSelector((state) => state.items.items);
    console.log("items:",items);
    return ( 
        <View style={styles.container}>
            <Text style={styles.status}>{"Set Status: "+setStatus+"/3"}</Text>
            <Text style={styles.title}>Select Shoes</Text>
            
        </View>
     );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    status: {
      marginTop: 10,
      paddingVertical: 8,
      
      color: "#20232a",
      textAlign: "left",
      fontSize: 20,
      fontWeight: "bold"
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
  
export default SelectShoes;