import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploradorScreen from '../screens/ExploradorScreen';
import CarritoScreen from '../screens/CarritoScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let name = 'home';
          if (route.name === 'Explorador') name = 'search';
          if (route.name === 'Carrito') name = 'cart';
          return <Ionicons name={name} size={size} color={focused ? '#007bff' : '#444'} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Explorador" component={ExploradorScreen} options={{ title: 'Explorar' }} />
      <Tab.Screen name="Carrito" component={CarritoScreen} options={{ title: 'Carrito' }} />
    </Tab.Navigator>
  );
}
