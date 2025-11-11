// ✅ App.js — compatible con Web, Android, iOS
import React from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import StackNavigator from './navigation/StackNavigator';

// ✅ Solo usar react-native-gesture-handler en móvil
if (Platform.OS !== 'web') {
  require('react-native-gesture-handler');
}

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <CartProvider>
            <StackNavigator />
          </CartProvider>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
