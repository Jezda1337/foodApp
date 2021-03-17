import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home.jsx';
import MealsScreen from '../Screens/MealsScreen.jsx';

//Pages
import BreakFast from '../pages/BreakFast.jsx';
import Lunch from '../pages/Lunch.jsx';
import Dinner from '../pages/Dinner.jsx';

const Stack = createStackNavigator();

const Routes = ()=>{
    return (
        <Stack.Navigator detachInactiveScreens="Home">
            <Stack.Screen options={{header:()=>null}} name="Home" component={Home} />
            <Stack.Screen  name="Meals" component={MealsScreen} />

            {/* Pages */}
            <Stack.Screen name="BreakFast" component={BreakFast}/>
            <Stack.Screen name="Lunch" component={Lunch}/>
            <Stack.Screen name="Dinner" component={Dinner}/>
        </Stack.Navigator>
    )
}

export default Routes;