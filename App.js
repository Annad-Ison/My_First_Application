import React from 'react';
import { StyleSheet, Text, Button, View, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Home from "./screens/home";


export default function App(){
    const   MainNavigator = createStackNavigator();
    return(
        <View style={{flex: 1}}>
            <NavigationContainer>
                <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="login" >
                    <MainNavigator.Screen name="home" component={Home} />
                    <MainNavigator.Screen name="login" component={Login} />
                </MainNavigator.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});