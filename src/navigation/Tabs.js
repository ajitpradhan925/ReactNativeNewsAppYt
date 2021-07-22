import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '@Screen/Home';
import Favorite from '@Screen/Favorite';
import Notification from '@Screen/Notification';
import Account from '@Screen/Account';
import { moderateScale } from 'react-native-size-matters';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
       <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#062743',
                inactiveTintColor: '#9ea9b3',
                tabStyle: {
                    marginVertical: moderateScale(10)
                },
                showLabel: false
            }}
       >
           <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="home-sharp" size={size} color={color} />
                    )
                }}

                />

            <Tab.Screen 
                name="Favorite" 
                component={Favorite} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="heart-sharp" size={size} color={color} />
                    )
                }}

            />


            <Tab.Screen 
                name="Notification" 
                component={Notification} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="notifications-sharp" size={size} color={color} />
                    )
                }}

            />


            <Tab.Screen 
                    name="Account" 
                    component={Account} 
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Icon name="person-sharp" size={size} color={color} />
                        )
                    }}

            />
       </Tab.Navigator>
    )
}

export default Tabs;
