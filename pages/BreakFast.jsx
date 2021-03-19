import React from "react";

import { StyleSheet, Text, ScrollView } from "react-native";
import {ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'

const restaurants = [
    'Карабурма',
    'Патрис Лумумба',
    'Рифат Бурџевић',
    'Краљ Александар',
    'Вождоваџ',
    'Кошутњак',
    'Земун',
    'Студентски град',
    'Мика Митровиц',
    'Обилићев венац',
    'Ћушина',
    'Агроном',
    'Фармацеут',
    'Глумац',
    'Медицинар',
    'Шумарски',
    'Ветеринар'
];

const BreakFast = () => {
  return (
    <ScrollView>
        {
            restaurants.map((restaurant, index)=>(
                <ListItem key={index} bottomDivider onPress={()=> alert('test')}>
                    <ListItem.Content style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <ListItem.Title style={{fontSize: 20, paddingVertical: 20}}>{restaurant}</ListItem.Title>
                        <Icon name='angle-right'/>
                    </ListItem.Content>
                </ListItem>
            ))
        }
    </ScrollView>
  );
};

export default BreakFast;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
});
