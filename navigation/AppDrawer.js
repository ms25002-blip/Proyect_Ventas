import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs from './AppTabs';
import PerfilScreen from '../screens/PerfilScreen';
import NotificacionesScreen from '../screens/NotificacionesScreen';
import SeguimientoScreen from '../screens/SeguimientoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={AppTabs} options={{ title: 'Inicio / Productos' }} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="Notificaciones" component={NotificacionesScreen} />
      <Drawer.Screen name="Seguimiento" component={SeguimientoScreen} />
    </Drawer.Navigator>
  );
}