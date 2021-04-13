import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cities from "../screens/Cities.jsx";

import { Icon } from 'react-native-elements';
//Pages
import Beograd from "../pages/Beograd.jsx";
import NoviSad from "../pages/NoviSad.jsx";
import Nis from "../pages/Nis.jsx";

import Food from "../screens/Food";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator detachInactiveScreens="Cities" screenOptions={{
      headerStyle: {
        backgroundColor: '#003049',
        borderBottomColor: '#ffea00',
        borderBottomWidth: 1
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        letterSpacing: 2
      }
    }}>
      <Stack.Screen
        options={{ header: () => null }}
        name="Cities"
        component={Cities}
      />

      {/* Pages */}
      <Stack.Screen
        options={{ title: "Мензе у Београду", gestureEnabled: true }}
        name="Beograd"
        component={Beograd}
      />
      <Stack.Screen
        options={{ title: "Мензе у Новом Саду", gestureEnabled: true }}
        name="NoviSad"
        component={NoviSad}
      />
      <Stack.Screen
        options={{ title: "Мензе у Нишу", gestureEnabled: true }}
        name="Nis"
        component={Nis}
      />

      <Stack.Screen
        options={ ({ route }) => ({title:route.params.name})}
        name="Food"
        component={Food}
      />
    </Stack.Navigator>
  );
};

export default Routes;
