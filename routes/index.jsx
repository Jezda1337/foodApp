import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home.jsx";
import Cities from "../screens/Cities.jsx";

//Pages
import Beograd from "../pages/Beograd.jsx";
import NoviSad from "../pages/NoviSad.jsx";
import Nis from "../pages/Nis.jsx";

import Food from "../screens/Food";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator detachInactiveScreens="Cities">
      {/* <Stack.Screen
        options={{ header: () => null }}
        name="Home"
        component={Home}
      /> */}
      <Stack.Screen
        // options={{
        //   title: "Градови",
        //   headerTitleAlign: "center",
        //   headerStyle: { backgroundColor: "#003B79" },
        //   headerTitleStyle: { color: "white", fontSize: 30 },
        // }}
        options={{ header: () => null }}
        name="Cities"
        component={Cities}
      />

      {/* Pages */}
      <Stack.Screen
        options={{ title: "Мензе у Београд" }}
        name="Beograd"
        component={Beograd}
      />
      <Stack.Screen
        options={{ title: "Мензе у Новом Саду" }}
        name="NoviSad"
        component={NoviSad}
      />
      <Stack.Screen
        options={{ title: "Мензе у Нишу" }}
        name="Nis"
        component={Nis}
      />

      <Stack.Screen
        options={({ route }) => ({ title: route.params.name })}
        name="Food"
        component={Food}
      />
    </Stack.Navigator>
  );
};

export default Routes;
