import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import AuthStack from '@Navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';
import axios from 'axios';

const {MyDarkTheme, MyLightTheme, BASE_URL} = Constant;

const RootNavigation = () => {
    const setUrlConfig = () => {
        console.log("called setUrlConfig");
        axios.defaults.baseURL = BASE_URL;
      };
    
      useEffect(() => {
        setUrlConfig();
      }, []);

    return (
        <NavigationContainer theme={MyLightTheme}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigation;
