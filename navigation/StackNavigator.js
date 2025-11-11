// navigation/StackNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BienvenidaScreen from '../screens/BienvenidaScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import DrawerNavigator from './DrawerNavigator';

import DetalleProductoScreen from '../screens/DetalleProductoScreen';
import ConfiguracionCompraScreen from '../screens/ConfiguracionCompraScreen';
import PagosScreen from '../screens/PagosScreen';
import CompraConfirmadaScreen from '../screens/CompraConfirmadaScreen';

import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { user, initializing } = useContext(AuthContext);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Main" : "Bienvenida"}
        screenOptions={{ headerTitleAlign: 'center' }}
      >

        {/* Pantallas públicas */}
        {!user && (
          <>
            <Stack.Screen 
              name="Bienvenida" 
              component={BienvenidaScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              options={{ title: "Iniciar Sesión" }}
            />

            <Stack.Screen 
              name="Registro" 
              component={RegistroScreen}
              options={{ title: "Crear Cuenta" }}
            />
          </>
        )}

        {/* Navegación principal */}
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        {/* Resto de pantallas */}
        <Stack.Screen name="DetalleProducto" component={DetalleProductoScreen}/>
        <Stack.Screen name="ConfigCompra" component={ConfiguracionCompraScreen}/>
        <Stack.Screen name="Pagos" component={PagosScreen}/>
        <Stack.Screen name="CompraConfirmada" component={CompraConfirmadaScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
