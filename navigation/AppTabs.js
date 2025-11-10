import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ExploradorScreen from '../screens/ExploradorScreen';
import CarritoScreen from '../screens/CarritoScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Explorador" component={ExploradorScreen} options={{ title: 'Explorar' }} />
      <Tab.Screen name="Carrito" component={CarritoScreen} options={{ title: 'Carrito' }} />
    </Tab.Navigator>
  );
}
