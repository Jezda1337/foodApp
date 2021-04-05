import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Loading from "./Loading";

const Restaurants = ({ endPoint, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.mocki.io/v1/df9e7e1a/${endPoint}`
      );
      const json = await response.json();
      setRestaurants(json[endPoint]);

      setLoad(false);
    };
    fetchData();
  }, []);

  return (
    <View>
      {isLoad ? (
        <Loading />
      ) : (
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
      )}
    </View>
  );
};

export default Restaurants;
