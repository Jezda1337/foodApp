import React, { useState, useEffect } from "react";
import {View, ScrollView } from "react-native";

import axios from "axios";
import Loading from "../components/Loading";

import FoodCard from '../components/FoodCard';

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
        const res = await axios("https://food-app-data.loca.lt/food");
        setData(res.data[`${name}`]);

        setLoad(false);
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, [name]);

  return (
    <View style={{backgroundColor: '#003049'}}>
      <View>
        {isLoad ? (
          <Loading />
        ) : (
          <ScrollView style={{}}>
            {data?.map((card, index) => (
              <FoodCard price={card.price} meals={card?.meals?.map((meal) => meal.meal)} key={card.id} image={images[index].image} food={card.name}/>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default Food;
