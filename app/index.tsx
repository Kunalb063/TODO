import React from 'react';
import { Text, View,StyleSheet,Image,Button,Alert,ImageBackground } from "react-native";
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';


export default function index(){
  return(
    <View style={styles.head}>
      {/* <ImageBackground source={require("./cat1.jpeg")} resizeMode='cover' style={styles.image}> */}
        <View>
          <Text style={styles.todo}>You are sexy</Text>
        </View>
      {/* </ImageBackground> */}
    </View>


  );
}

const styles=StyleSheet.create({
  head:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    opacity:0.5
  },
  todo:{
    alignSelf:'center',
    fontSize:50,
    fontWeight:'bold',
    opacity:,
    
  },
  image:{
    flex:1,
    opacity:0.5,
  }
})




// export default function Index() {
//   return (
//     <View style={{
//       flex: 1,
//         backgroundColor:'#bcf5ed'
//     }}    >
//       <View style={{
//         backgroundColor:'#000000',
//         height:60,
//         paddingLeft:20      }}>
//         <Text style={{
//           fontSize:40,
//           color:'white',
//         }}>
//           Home
//         </Text>
//       </View>

//       <View style={{
//         // height:80,
//         padding:10
//       }}>
//         <Text style={{
//           color:'purple',
//           fontSize:30,
//           fontWeight:'bold'
//         }}>Vashisth Building Materials My shop</Text>
//       </View>

//       <Image source={require("./logo.png")}
//       style={{
//         height:300,
//         width:300,
//         alignSelf:'center'
//       }}/>
      
//     <View style={{
//       flexDirection:'row',
//       justifyContent:'space-around'
//     }}>
      
//       <Image source={require("./build.jpg")}
//       style={{
//         height:200,
//         width:200
//       }} />

//       <View style=
//       {{
       
//       }}>
//       <Button
//         onPress={()=>{Alert.alert("Dont click me you bastard")}}
//         title="OKAY!"
//         color={'purple'}
//       />
//       </View>

//     </View>
    

//       <Text style={{
//         textAlign:'center',
//       }}>Hello folk.. your phone is being hacked</Text>
//       <Text style={{
//         textAlign:'center'
//       }}>Want to see something new</Text>

//       <View style={styles.button1}>
//         <Button onPress={()=>{Alert.alert("Submitted")}}
//         title="Button"
//         color={"green"}
//         />
        
//       </View>
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   box:{
//     backgroundColor:"red",
   
//   },
//   button1:{
//     margin:50,
//     width:200,
    
//   }
// })
