/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
const AppComponent = () => (
    <NavigationContainer>
        <Provider store={store}>
        <App/>
        </Provider>
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => AppComponent);
