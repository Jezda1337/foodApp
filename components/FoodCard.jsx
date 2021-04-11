import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const FoodCard = (props) => {
  return (
        <View style={styles.container}>
          <ImageBackground source={props.image} style={styles.image}>
            <LinearGradient colors={['transparent', '#111']} style={styles.linearGradient}>
              <View style={{maxWidth: '55%'}}>
                {props.meals?.map((meal, index)=><Text key={index} style={[styles.text, {width: '100%'}]}>{meal}</Text>)}
              </View>
              <View>
                <Text style={[styles.text, {}]}>{props.food}</Text>
                <Text style={[styles.text, {color: 'yellow'}]}>{props.price}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    height: 400
  }
});