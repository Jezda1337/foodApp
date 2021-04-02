import React from "react";
import Restaurants from "../components/Restaurants";

const NoviSad = ({ navigation }) => {
  return <Restaurants endPoint="ns" navigation={navigation} />;
};

export default NoviSad;
