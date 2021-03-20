import React from "react";

import { StyleSheet } from "react-native";

import Restaurants from "../components/Restaurants";

const Beograd = ({ navigation }) => {
  return <Restaurants endPoint="bg" navigation={navigation} />;
};

export default Beograd;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
});
