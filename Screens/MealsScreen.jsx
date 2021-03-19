import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MealsCard from "../components/MealsCard";

const MealsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor:
            "linear-gradient(to right, rgb(15,32,39), rgb(66, 134, 244))",
        }}
      >
        <MealsCard
          title="Breakfast"
          imagePath={require("../assets/webp/breakfast.webp")}
          page={() => {
            navigation.navigate("BreakFast");
          }}
        />
        <MealsCard
          title="Lunch"
          imagePath={require("../assets/webp/lunch.webp")}
          page={() => navigation.navigate("Lunch")}
        />
        <MealsCard
          title="Dinner"
          imagePath={require("../assets/webp/dinner.webp")}
          page={() => navigation.navigate("Dinner")}
        />
      </View>
    </ScrollView>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({});
