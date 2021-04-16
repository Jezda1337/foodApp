import React from "react";
import { ScrollView, View } from "react-native";
import CityCard from "../components/CityCard";

const Cities = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#003566",
        }}
      >
        <CityCard
          title="Београд"
          imagePath={require("../assets/webp/Beograd.webp")}
          page={() => {
            navigation.navigate("Beograd");
          }}
        />
        <CityCard
          title="Нови Сад"
          imagePath={require("../assets/webp/NoviSad.webp")}
          page={() => navigation.navigate("NoviSad")}
        />
        <CityCard
          title="Ниш"
          imagePath={require("../assets/webp/Panorama_Nisa.webp")}
          page={() => navigation.navigate("Nis")}
        />
      </View>
    </ScrollView>
  );
};

export default Cities;
