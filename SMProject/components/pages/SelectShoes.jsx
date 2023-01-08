import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector, useDispatch} from "react-redux";
import { increment } from '../../redux/ducks/counter';
import { addShoes, getItems } from '../../redux/ducks/items';

const SelectShoes = ({navigation}) => {
    const setStatus = useSelector((state) => state.counter.currentSetStetus);
    var items = useSelector((state) => state.items.itemsList);
    const isSelected = useSelector((state) => state.items.shoes);
    const iscComleted = useSelector((state) => state.counter.currentSetStetus);
    const dispatch = useDispatch();
    items = items.filter(item => {
      return item.type === "shoes";
    });
    const [color, setColor] = useState("");
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () =>{
      if(isSelected === undefined){
        dispatch(increment())
      }
      dispatch(addShoes({
        id : id,
        name: name,
        brand: brand,
        color: color,
        size: size,
      }))
      if(iscComleted === 2){
        navigation.navigate('Success');
      }
      setShowPopup(!showPopup);
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.status}>{"Set Status: "+setStatus+"/3"}</Text>
            <ScrollView>
            {
              items.map((item, i) =>
              <View style={styles.box} key={i}>
                <Text style={styles.inner}>{"brand: "+item.brand}</Text>
                <Text style={styles.inner}>{"model: "+item.name}</Text>
                <Text style={styles.inner}>colors:</Text>
                <View style={styles.colorMenu}>
                {item.colors.map((colorItem,i) =>
                    
                    <Button 
                      key={i+100}
                      color={colorItem}
                      title="   "
                      onPress={() => {
                        setColor(colorItem);
                        setBrand(item.brand);
                        setName(item.name);
                        setId(item.id);
                      }}
                      />
                )}
                
                </View>
                
                <View style={styles.colorMenu} hi>

                {
                  id === item.id ?(
                  item.sizes.map((sizeItem,i) =>
                    
                    <Button 
                      key={i+100}
                      title={""+sizeItem}
                      onPress={() => {
                        setSize(sizeItem);
                        setShowPopup(!showPopup);
                      }}
                      />
                )):null}
                
                </View>
                
              </View>
              )
            }
            </ScrollView>
              {showPopup ? (
                <SafeAreaView style={styles.popupOuter}>
                    <Text style={styles.title}>{"brand: " + brand}</Text>
                    <Text style={styles.title}>{"model: "+ name}</Text>
                    <Text style={styles.title}>{"size: "+size}</Text>
                    <Text style={[styles.title ,{backgroundColor:color}]}  >{"color"}</Text>
                    <Button
                      title='Add Shoes'
                      onPress={handleAddToCart}
                    />
                </SafeAreaView>
              ):null}
            
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
  
export default SelectShoes;