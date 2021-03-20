import React from "react";

import { StyleSheet } from "react-native";

import Restaurants from "../components/Restaurants";

const NoviSad = () => {
  return <Restaurants endPoint="ns" />;
};

export default NoviSad;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
});
