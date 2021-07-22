import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import SplashScreen from '@Screen/SplashScreen';
import Login from '@Screen/Login';
import Register from '@Screen/Register';
import Onboarding from '@Screen/Onboarding';
import NewsDetails from '@Screen/NewsDetails';
import CategoryList from '@Screen/CategoryList';
import About from '@Screen/About';



const AuthStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Tab">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}


export default AuthStack;
