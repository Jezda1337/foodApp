// import React, { useState } from "react";
// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import { Input, Button } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";

// const Home = ({ navigation }) => {
//   const [cardNum, setCardNum] = useState(0);
//   const validation = () => {
//     if (cardNum === 123) {
//       navigation.navigate("Cities");
//     }
//   };

//   return (
//     <ImageBackground
//       blurRadius={1.2}
//       source={require("../assets/background-login.webp")}
//       style={{ flex: 1, resizeMode: "cover" }}
//     >
//       <View style={styles.container}>
//         <View
//           style={{
//             backgroundColor: "rgba(10,10,10,.4)",
//             padding: 50,
//             marginHorizontal: 20,
//             borderRadius: 20,
//             borderWidth: 0.5,
//             borderColor: "#cecece",
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 textAlign: "center",
//                 fontSize: 25,
//                 marginBottom: 30,
//                 color: "white",
//               }}
//             >
//               Sing in!
//             </Text>
//             <Input
//               placeholder="Card Number"
//               placeholderTextColor="white"
//               style={{ color: "white" }}
//               keyboardType="number-pad"
//               key
//               rightIcon={<Icon name="id-card" size={20} color="white" />}
//               onChangeText={(val) => {
//                 setCardNum(parseInt(val));
//               }}
//             />
//           </View>

//           <View style={{ marginTop: 35 }}>
//             <Button
//               title="Login"
//               icon={{ name: "login", size: 20, color: "white" }}
//               titleStyle={{ fontSize: 20, marginLeft: 10 }}
//               onPress={validation}
//             />
//           </View>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });
