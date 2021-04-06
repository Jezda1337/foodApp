import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import axios from "axios";
import Loading from "../components/Loading";

import FoodCard from '../components/FoodCard';
// const images = [
//   "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?cs=srgb&dl=pexels-daniela-constantini-5591663.jpg&fm=jpg",
//   'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?cs=srgb&dl=pexels-jer-chung-2116094.jpg&fm=jpg',
//   'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?cs=srgb&dl=pexels-daniela-constantini-5591663.jpg&fm=jpg',
// ];

const images = [
  {image:require('../assets/webp/breakfast.webp')},
  {image:require('../assets/webp/lunch.webp')},
  {image:require('../assets/webp/dinner.webp')}
];


const Food = ({ route }) => {
  const { name, address, phone } = route.params;
  const [isLoad, setLoad] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://api.mocki.io/v1/df9e7e1a/food");
        setData(res.data[`${name}`]);

        setLoad(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [name]);


  console.log(images.image)
  return (
    <View>
      <View>
        {isLoad ? (
          <Loading />
        ) : (
          <ScrollView style={{}}>
            {data?.map((card, index) => (
              <FoodCard price={card.price} meals={card?.meals?.map((meal) => meal.meal)} key={card.id} image={images.[index].image} food={card.name}/>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default Food;
