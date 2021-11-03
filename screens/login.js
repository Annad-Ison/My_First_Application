import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, } from "react-native";

export default function Login(){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Image
                    source={{uri: "https://4.bp.blogspot.com/-U1tByZk_fk4/WznVXqii-HI/AAAAAAAAASw/g3kkOQbrN64-Ys90CZtsGCYmEVVA5S2qACLcBGAs/s1600/610M43kbqvL._SL1024_.jpg"}}
                    style={{ width: 150, height: 150, borderRadius: 40, marginBottom: 10}}
                />
              <Text style={{fontSize: 24}}>Welcome Buddy</Text>
              <Text style={{fontSize: 12}}>Buy all your quality but affordable earbuds from Buddy ;)</Text>
              <View style={{alignSelf: "stretch", paddingHorizontal: 50, paddingVertical: 20}}>
                <TextInput placeholder="Username" style={{backgroundColor: "#fff", borderRadius: 10, padding: 10, marginBottom: 15}} />
                <TextInput placeholder="Password" style={{backgroundColor: "#fff", borderRadius: 10, padding: 20, marginBottom: 20}} />
                <Button  title="Sign up" /> 
                <View style={{marginBottom: 10}} />
                <Button title="Sign in" />
              </View>
        </View>
      );
}

