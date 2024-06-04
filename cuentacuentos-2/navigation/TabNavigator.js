import React, {Component} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text,View, StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
// You can import from local files

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
  return( 
     <Tab.Navigator
     labeled={false}
     barStyle={styles.bottomTabStyle}
    screenOptions={({ route }) => ({ 
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Inicio') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Crear Historia') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={iconName} size={RFValue(30)} color={color} style={styles.icons} />;
                },
            })}
                activeTintColor={'#ee8249'}
                inactiveTintColor= {'gray'}
            >

            <Tab.Screen name="Inicio" component={Feed} />
            <Tab.Screen name="Crear Historia" component={CreateStory} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomTabStyle:{
    backgroundColor: "#074575",
    height:"10%",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow: 'hidden',
    position: "absolute"
  },
  icons:{
    width: RFValue(30),
    height:RFValue(30)
  }
})