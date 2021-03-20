import React from "react";

import { StyleSheet } from "react-native";

import Restaurants from "../components/Restaurants";

const Beograd = () => {
  return <Restaurants endPoint="bg" />;
};

export default Beograd;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
});
