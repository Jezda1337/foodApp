import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Tile, Card } from "react-native-elements";
import axios from "axios";

const Food = ({ route }) => {
  const { name, address, phone } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://api.mocki.io/v1/2d6c73e0/food");
        setData(res.data[`${name}`]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [name]);

  console.log(data);
  // console.log(name);
  return (
    <View>
      <Tile
        style={{ borderBottomLeftRadius: 20 }}
        height={300}
        imageSrc={require("../assets/webp/breakfast.webp")}
        imageContainerStyle={{ width: "100%", borderBottomLeftRadius: 50 }}
        overlayContainerStyle={{
          backgroundColor: "rgba(0,0,0,.5)",
          borderBottomLeftRadius: 50,
        }}
        title={name}
        titleStyle={{ fontSize: 50 }}
        featured
        activeOpacity={0.8}
      />
      <ScrollView
        horizontal
        contentContainerStyle={{
          // justifyContent: "center",
          width: "250%",
        }}
      >
        {data?.map((title) => (
          <Card containerStyle={{ width: "30%" }} key={title.id}>
            <Card.Title>{title.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={require("../assets/webp/brekfast-in.webp")} />
            {title?.meals?.map((m) => (
              <Text key={m.id}>{m.meal}</Text>
            ))}
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  mealContainer: {
    backgroundColor: "#eee",
    justifyContent: "center",
    // flex: 1,
  },
});

// source={require("../assets/webp/brekfast-in.webp")}
