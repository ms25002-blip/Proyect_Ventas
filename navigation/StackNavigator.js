import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from'../screens/RegistroScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import AppDrawer from './AppDrawer';
import DetalleProductoScreen from '../screens/DetalleProductoScreen';
import ConfiguracionCompraScreen from '../screens/ConfiguracionCompraScreen';
import PagosScreen from '../screens/PagosScreen';
import CompraConfirmadaScreen from '../screens/CompraConfirmadaScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions= {{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        {/* Pantalla principal que contiene Drawer + Tabs */}
        <Stack.Screen
          name="Main"
          component={AppDrawer}
          options={{ headerShown: false }}
        />
        {/* Pantallas que abren fuera de las Tabs/Drawer */}
        <Stack.Screen name="DetalleProducto" component={DetalleProductoScreen} options={{ title: 'Detalle' }} />
        <Stack.Screen name="ConfigCompra" component={ConfiguracionCompraScreen} options={{ title: 'Configurar compra' }} />
        <Stack.Screen name="Pagos" component={PagosScreen} />
        <Stack.Screen name="CompraConfirmada" component={CompraConfirmadaScreen} options={{ title: 'Confirmación' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
