import React from "react";
import { StyleSheet, View } from "react-native";
import {Chase} from 'react-native-animated-spinkit';
const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Chase size={80} color="#ffea00"/>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: '#003566'
  },
});
