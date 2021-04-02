import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodCard = () => {
  return (
    <View style={styles.card} key={img.id}>
      <Text style={styles.title}>{img.title}</Text>
      <Avatar
        key={img.id}
        size={150}
        rounded
        containerStyle={{
          backgroundColor: "blue",
          position: "relative",
          top: -30,
          right: -20,
        }}
        source={{ uri: img.image }}
      />

      <View style={styles.price}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{img.price}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: -10,
          // backgroundColor: "red",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            backgroundColor: "#f46610",
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          {img.name}
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
    backgroundColor: "#f46610",
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 140,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  price: {
    position: "absolute",
    top: 0,
    backgroundColor: "#F5A130",
    width: 150,
    height: 45,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    // backgroundColor: "red",
    width: 180,
    textAlign: "center",
    position: "relative",
    bottom: -20,
  },
});
