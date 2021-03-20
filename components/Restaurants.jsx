import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Restaurants = ({ endPoint, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.mocki.io/v1/2d6c73e0/${endPoint}`
      );
      const json = await response.json();
      setRestaurants(json[endPoint]);
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      {restaurants.map((restaurant) => (
        <ListItem
          key={restaurant.id}
          bottomDivider
          onPress={() =>
            navigation.navigate("Food", {
              name: restaurant.name,
              address: restaurant.adresa,
              phone: restaurant.telefon,
            })
          }
        >
          <ListItem.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItem.Title style={{ fontSize: 20, paddingVertical: 20 }}>
              {restaurant.name}
            </ListItem.Title>
            <Icon name="angle-right" size={20} />
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default Restaurants;
