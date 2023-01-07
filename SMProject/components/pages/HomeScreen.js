import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable} from "react-native";

const HomeScreen = ({navigation}) => {

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Application</Text>
            <Pressable onPress={() => navigation.navigate('SelectShoes')}>
              <Text style={styles.title}>Next</Text>
            </Pressable>
        </View>
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
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  
export default HomeScreen;