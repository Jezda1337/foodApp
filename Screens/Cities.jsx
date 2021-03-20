import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CityCard from "../components/CityCard";

const Cities = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor:
            "linear-gradient(to right, rgb(15,32,39), rgb(66, 134, 244))",
        }}
      >
        <CityCard
          title="Београд"
          imagePath={require("../assets/Beograd.jpg")}
          page={() => {
            navigation.navigate("Beograd");
          }}
        />
        <CityCard
          title="Нови Сад"
          imagePath={require("../assets/NoviSad.jpg")}
          page={() => navigation.navigate("NoviSad")}
        />
        <CityCard
          title="Ниш"
          imagePath={require("../assets/Panorama_Nisa.jpg")}
          page={() => navigation.navigate("Nis")}
        />
      </View>
    </ScrollView>
  );
};

export default Cities;

const styles = StyleSheet.create({});
