import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StartScreen from './StartScreen';
import SelectPants from './SelectPants';
import SelectShoes from './SelectShoes';
import SelectShirt from './SelectShirts';
const Drawear = createDrawerNavigator()
const HomeScreen = ({navigation}) => {
    return ( 
        
          <Drawear.Navigator >
            <Drawear.Screen name="Start Screen" component={StartScreen}/>
            <Drawear.Screen name="Select Shoes" component={SelectShoes}/>
            <Drawear.Screen name="Select Pants" component={SelectPants}/>
            <Drawear.Screen name="Select Shirt" component={SelectShirt}/>
          </Drawear.Navigator>
        
    );
}
  
export default HomeScreen;