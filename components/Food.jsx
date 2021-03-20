import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Food = ({ route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
