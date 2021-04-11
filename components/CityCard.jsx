import React from "react";
import { View } from "react-native";
import { Tile } from "react-native-elements";

const CityCard = ({ title, imagePath, page }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
      }}
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
          textShadowRadius: 50,
        }}
        featured
        onPress={page}
        activeOpacity={0.4}
        onBlur
        imageContainerStyle={{ width: "100%", borderRadius: 10 }}
        containerStyle={{ width: "100%" }}
        overlayContainerStyle={{
          backgroundColor: "rgba(15, 17, 19,0.3)",
          borderRadius: 10,
        }}
      />
    </View>
  );
};
export default CityCard;
