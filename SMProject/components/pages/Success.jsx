import React from 'react';
import { Button, StyleSheet, Text, View, Image } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { addSet } from '../../redux/ducks/items';

function Success({navigation}) {
    const dispatch = useDispatch();
    
    const shoes = useSelector((state) => state.items.shoes);
    const shirt = useSelector((state) => state.items.shirt);
    const pants = useSelector((state) => state.items.pants);
    const restart = () =>{
      dispatch(addSet());
      navigation.navigate('Start Screen');
    }
    const imagesURL = [
      "https://t4.ftcdn.net/jpg/00/58/99/07/360_F_58990717_6GkOtlWF1CirNp4cM7v5desXc8Ci8o64.jpg",
      "https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?w=2000",
      "https://media.istockphoto.com/photos/silhouette-of-a-man-holding-a-trophy-at-sunset-picture-id1202740292?b=1&k=20&m=1202740292&s=612x612&w=0&h=WNQasYubjIswIKcQxq5guDI4z5ca0lttDZDrT3VzmjY="
    ]
    var i = Math.floor(Math.random() * 100) % 3;
    console.log(imagesURL[i]);
    return ( 
        
        <View style={styles.container}>
            <Text style={styles.title}>Success</Text>
            <Image 
              style={{width:60, height:60, alignSelf:"center"}}
              source={{uri: imagesURL[i]}}
            />
            <View style={styles.box}>
              <Text style={styles.title}>Shoes</Text>
              <Text style={styles.inner}>{"brand: "+shoes.brand}</Text>
              <Text style={[styles.inner, {color: shoes.color}]}>{"color: "+shoes.color}</Text>
              <Text style={styles.inner}>{"size: "+shoes.size}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>Shirt</Text>
              <Text style={styles.inner}>{"brand: "+shirt.brand}</Text>
              <Text style={[styles.inner, {color: shirt.color}]}>{"color: "+shirt.color}</Text>
              <Text style={styles.inner}>{"size: "+shirt.size}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>Pants</Text>
              <Text style={styles.inner}>{"brand: "+pants.brand}</Text>
              <Text style={[styles.inner, {color: pants.color}]}>{"color: "+pants.color}</Text>
              <Text style={styles.inner}>{"size: "+pants.size}</Text>
            </View>
            <Button
              title='restart'
              onPress={restart}
            />
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
    popupOuter: {
      height: '93%',
      width: '100%',
      resizeMode: "cover",
      backgroundColor: "#E5DAD6",
      padding: 5,
      borderRadius: 10

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
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
    },
    inner: {

      color: "#2B18D5",
      textAlign: "center",
      fontSize: 20,
      
    },  

  });
  
export default Success;