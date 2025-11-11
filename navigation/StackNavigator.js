// navigation/StackNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BienvenidaScreen from '../screens/BienvenidaScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import DrawerNavigator ./DrawerNavigatorwerNavigator';

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
        initialRouteName="Bienvenida"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        {!user && (
          <>
            <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
          </>
        )}

        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProductoScreen}
          options={{ title: 'Detalle' }}
        />

        <Stack.Screen
          name="ConfigCompra"
          component={ConfiguracionCompraScreen}
          options={{ title: 'Configurar compra' }}
        />

        <Stack.Screen name="Pagos" component={PagosScreen} />

        <Stack.Screen
          name="CompraConfirmada"
          component={CompraConfirmadaScreen}
          options={{ title: 'Confirmación' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
