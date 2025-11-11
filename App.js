import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <CartProvider>
          <StackNavigator />
        </CartProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
