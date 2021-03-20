import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Food = ({ route }) => {
  const { name, address, phone } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "blue", flex: 1 }}>
        <Text>{name}</Text>
        <Text>{address}</Text>
        <Text>{phone}</Text>
      </View>

      <View style={{ backgroundColor: "red", flex: 1.3 }}>
        <Text>a</Text>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
