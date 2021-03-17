import React from "react";
import { View } from "react-native";
import { Tile } from "react-native-elements";

const MealsCard = ({ title, imagePath, page }) => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <Tile
        imageSrc={imagePath}
        title={title}
        titleStyle={{
          fontSize: 50,
          color:'#f3f169',
          fontWeight: "bold",
          textShadowColor: "#000",
          textShadowOffset: { width: 3, height: 3},
          textShadowRadius: 50
        }}
        featured
        onPress={page}
        activeOpacity={0.4}
        onBlur
        imageContainerStyle={{ width: "100%", borderRadius: 20}}
        containerStyle={{width: '100%'}}
        height={200}
        overlayContainerStyle={{backgroundColor:'rgba(0,0,0,.3)', borderRadius: 20}}
      />
    </View>
  );
};

export default MealsCard;
