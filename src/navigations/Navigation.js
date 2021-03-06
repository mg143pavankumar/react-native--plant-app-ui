import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from "../screens/Detail"
import Favourite from "../screens/Favourite"
import Profile from '../screens/Profile'
import {Image} from 'react-native'



const Tab = createBottomTabNavigator();
const  BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                style: {
                    height: 65,
                    justifyContent: "center",
                    paddingVerticals: 15,
                    backgroundColor:"#eff4f0",
                    elevation:2

                }
            }}
            >

            <Tab.Screen
                name = "Home"
                componet = {Home}
                options = {{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image 
                            source = {require('../images/8.png')}
                            style = {{height:20, width:20}}
                        />
                    )
                }}
            />

            <Tab.Screen
                name = "Favourite"
                componet = {Favourite}
                options = {{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image 
                            source = {require('../images/9.png')}
                            style = {{height:20, width:20}}
                        />
                    )
                }}
            />

            <Tab.Screen
                name = "Profile"
                componet = {Profile}
                options = {{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image 
                            source = {require('../images/10.png')}
                            style = {{height:20, width:20}}
                        />
                    )
                }}
            />
    
            
        </Tab.Navigator>
    )
}


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle} >
            <Stack.Screen name = "Home" componet = {BottomTabNavigator}/>
            <Stack.Screen name = "Detail" componet = {Detail} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation;