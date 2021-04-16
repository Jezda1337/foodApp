import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Loading from "./Loading";

const Restaurants = ({ endPoint, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    // handle the error
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://food-app-data.loca.lt/${endPoint}`
        );
        const json = await response.json();
        setRestaurants(json);
  
        setLoad(false);
      };
      fetchData();
    } catch(err) {
      alert(err.message);
    }
  }, [endPoint]);
  
  return (
    <View style={styles.container}>
      {isLoad ? (
        <Loading />
      ) : (
        <ScrollView>
          {/* maping through the restaurants and make list */}
          {restaurants.map((restaurant) => (
            <ListItem
              containerStyle={{backgroundColor: '#003049'}}
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
                <ListItem.Title style={styles.title}>
                  {restaurant.name}
                </ListItem.Title>
                <Icon name="angle-right" size={30} color='#ffea00'/>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    paddingVertical: 20,
    color: '#ffea00'
  },
  container: {
    backgroundColor: '#003049',
    height: '100%'
  }
})