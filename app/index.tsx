import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 10, backgroundColor: "#FAF6F0" }}>
        <Text style={styles.head}>TODO</Text>
      </View>
      <View style={styles.home}>
        <Image
          source={require("./roundcat.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 2 / 10, backgroundColor: "#FAF6F0" }}>
        <View style={styles.add}>
          <TouchableHighlight onPress={() => alert("Press")}>
            <Text style={{ fontSize: 80 }}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 7 / 10,
    backgroundColor: "#FAF6F0",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 200,
    justifyContent: "center",
    alignSelf: "center",
  },
  head: {
    fontSize: 50,
    // color: "#7D6E83",
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
  add: {
    backgroundColor: "lightgreen",
    width: 80,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    // height:100,
    // width:100
  },
});

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
//     </View>

//   );
// }
