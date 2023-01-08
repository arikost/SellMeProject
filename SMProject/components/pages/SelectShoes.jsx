import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { getItems } from '../../redux/ducks/items';

const SelectShoes = ({navigation}) => {
    const setStatus = useSelector((state) => state.counter.currentSetStetus);
    var items = useSelector((state) => state.items.itemsList);
    items = items.filter(item => {
      return item.type === "shoes";
    });
    const [color, setColor] = useState("");
    return ( 
        <View style={styles.container}>
            <Text style={styles.status}>{"Set Status: "+setStatus+"/3"}</Text>
            <Text style={styles.title}>Select Shoes</Text>

            {
              items.map((item, i) =>
              <View style={styles.box} key={i}>
                <Text style={styles.inner}>{"brand: "+item.brand}</Text>
                <Text style={styles.inner}>{"model: "+item.name}</Text>
                <Text style={styles.inner}>colors:</Text>
                <View style={styles.colorMenu}>
                {item.colors.map((color,i) =>
                    
                    <Button 
                      key={i+100}
                      color={color}
                      title="   "
                      />
                )}
                </View>
              </View>
              )
            }
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
    },
    colorMenu:{
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    box: {
      
      height: 'auto',
      borderWidth: 4,
      borderColor: "#092443",
      borderRadius: 5,
      backgroundColor: "#B5C6D8",
      margin : 4,
      justifyContent: "flex-start",
      alignItems: 'center',
      alignSelf: 'stretch',
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
      marginTop: 10,
      paddingVertical: 8,
      
      color: "#20232a",
      textAlign: "left",
      fontSize: 30,
      fontWeight: "bold"
    },
    inner: {

      color: "#20232a",
      textAlign: "center",
      fontSize: 20,
      
    },  

  });
  
export default SelectShoes;