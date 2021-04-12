import React from "react";
import { View, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";

const CityCard = ({ title, imagePath, page }) => {
  return (
    <View
      style={styles.container}
    >
      <Tile
        imageSrc={imagePath}
        title={title}
        titleStyle={{
          fontSize: 50,
          color: "#FFF00F",
          fontWeight: "bold",
          textShadowColor: "#2e4750",
          textShadowOffset: { width: 3, height: 3 },
          // textShadowRadius: ,
        }}
        featured
        onPress={page}
        activeOpacity={0.4}
        onBlur
        imageContainerStyle={{ width: "100%", borderRadius: 10 }}
        containerStyle={{ width: "100%" }}
        overlayContainerStyle={{
          backgroundColor: "rgba(15, 17, 19,0.5)",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ffea00'
        }}
      />
    </View>
  );
};
export default CityCard;


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  }
})