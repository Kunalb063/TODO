import React from 'react';
import { Text, View,StyleSheet,Image,Button,Alert } from "react-native";
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <View style={{
      flex: 1,
        backgroundColor:'#bcf5ed'
    }}    >
      <View style={{
        backgroundColor:'#000000',
        height:60,
        paddingLeft:20      }}>
        <Text style={{
          fontSize:40,
          color:'white',
        }}>
          Home
        </Text>
      </View>

      <View style={{
        // height:80,
        padding:10
      }}>
        <Text style={{
          color:'purple',
          fontSize:30,
          fontWeight:'bold'
        }}>Vashisth Building Materials</Text>
      </View>

      <Image source={require("./logo.png")}
      style={{
        height:300,
        width:300,
        alignSelf:'center'
      }}/>
      
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around'
    }}>
      
      <Image source={require("./build.jpg")}
      style={{
        height:200,
        width:200
      }} />

      <View style=
      {{
       
      }}>
      <Button
        onPress={()=>{Alert.alert("Dont click me you bastard")}}
        title="OKAY!"
        color={'purple'}
      />
      </View>

    </View>
    

      <Text style={{
        textAlign:'center',
      }}>Hello folk.. your phone is being hacked</Text>
      <Text style={{
        textAlign:'center'
      }}>Want to see something new</Text>
    </View>
    
  );
}
