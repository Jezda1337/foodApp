import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Restaurants = ({ endPoint, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/${endPoint}`);
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
          onPress={() => navigation.navigate("Food")}
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
