import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('@cart');
        if (saved) setCart(JSON.parse(saved));
      } catch (e) { console.warn(e); }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@cart', JSON.stringify(cart)).catch(e => console.warn(e));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const found = prev.find(p => p.id === item.id);
      if (found) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id));
  const clear = () => setCart([]);
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));

  const createOrder = async ({ address, phone, paymentMethod, shipping = 3.5 }) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const subtotal = cart.reduce((s, p) => s + (p.price || 0) * (p.qty || 1), 0);
    const total = subtotal + shipping;

    const orderDoc = {
      uid: user.uid,
      items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
      subtotal,
      shipping,
      total,
      address,
      phone,
      paymentMethod,
      status: 'En proceso',
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'orders'), orderDoc);
    clear();
    return docRef.id;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, updateQty, createOrder }}>
      {children}
    </CartContext.Provider>
  );
}
