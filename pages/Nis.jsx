import React from "react";

import { StyleSheet } from "react-native";

import Restaurants from "../components/Restaurants";

const Nis = ({ navigation }) => {
  return <Restaurants endPoint="nis" navigation={navigation} />;
};

export default Nis;
