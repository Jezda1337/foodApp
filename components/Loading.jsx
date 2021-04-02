import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={150} color="skyblue" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
