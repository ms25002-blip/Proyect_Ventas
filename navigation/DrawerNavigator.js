// navigation/DrawerNavigator.js
import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppTabs from './AppTabs';
import PerfilScreen from '../screens/PerfilScreen';
import NotificacionesScreen from '../screens/NotificacionesScreen';
import SeguimientoScreen from '../screens/SeguimientoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        drawerType: Platform.OS === 'web' ? 'permanent' : 'front',
        overlayColor: Platform.OS === 'web' ? 'transparent' : 'rgba(0,0,0,0.5)',
        drawerStyle: Platform.OS === 'web'
          ? { width: 240, borderRightWidth: 1, borderColor: '#ccc' }
          : {},
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={AppTabs}
        options={{ title: 'Inicio / Productos' }}
      />

      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Mi Perfil' }}
      />

      <Drawer.Screen
        name="Notificaciones"
        component={NotificacionesScreen}
        options={{ title: 'Mis Pedidos' }}
      />

      <Drawer.Screen
        name="Seguimiento"
        component={SeguimientoScreen}
        options={{ title: 'Seguimiento' }}
      />
    </Drawer.Navigator>
  );
}

