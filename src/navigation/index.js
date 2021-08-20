import React from 'react'
import { View, Text } from 'react-native'
import AuthStack from '@Navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';

const {MyDarkTheme, MyLightTheme} = Constant;

const RootNavigation = () => {
    return (
        <NavigationContainer theme={MyLightTheme}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigation;
