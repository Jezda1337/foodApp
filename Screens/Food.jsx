import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Tile, Card, Avatar } from "react-native-elements";
import axios from "axios";
import Loading from "../components/Loading";

const Food = ({ route }) => {
  const { name, address, phone } = route.params;
  const [isLoad, setLoad] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://api.mocki.io/v1/2d6c73e0/food");
        setData(res.data[`${name}`]);

        setLoad(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [name]);

  console.log(isLoad);

  return (
    <View>
      <View>
        {isLoad ? (
          <Loading />
        ) : (
          <ScrollView style={styles.container}>
            {data?.map((card) => (
              <Card
                containerStyle={{
                  borderWidth: 0,
                }}
                key={card.id}
              >
                <Card.Title>{card.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: card.image }} />
                {card?.meals?.map((m) => (
                  <Text key={m.id}>{m.meal}</Text>
                ))}
                <Card.Divider />
                <Text>{card.price}</Text>
              </Card>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default Food;

const styles = StyleSheet.create({
  mealContainer: {
    backgroundColor: "red",
    justifyContent: "center",
  },
});
