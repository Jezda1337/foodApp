import React from "react";

import { StyleSheet } from "react-native";

import Restaurants from "../components/Restaurants";

const Nis = () => {
  return <Restaurants endPoint="nis" />;
};

export default Nis;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
});
