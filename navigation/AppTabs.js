// navigation/AppTabs.js
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ExploradorScreen from '../screens/ExploradorScreen';
import CarritoScreen from '../screens/CarritoScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: Platform.OS === 'web'
          ? {
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              borderTopWidth: 1,
              borderColor: '#ccc',
              backgroundColor: '#fff',
            }
          : {},

        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Explorador') iconName = 'search';
          if (route.name === 'Carrito') iconName = 'cart';

          return (
            <Ionicons
              name={iconName}
              size={Platform.OS === 'web' ? 22 : size}
              color={focused ? '#007bff' : '#555'}
            />
          );
        },

        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#555',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />

      <Tab.Screen
        name="Explorador"
        component={ExploradorScreen}
        options={{ title: 'Explorar' }}
      />

      <Tab.Screen
        name="Carrito"
        component={CarritoScreen}
        options={{ title: 'Carrito' }}
      />
    </Tab.Navigator>
  );
}
