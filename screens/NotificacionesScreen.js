import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList, View } from 'react-native';
import { Layout } from '../components';
import { db } from '../firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

export default function NotificacionesScreen() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const q = query(collection(db, 'orders'), where('uid', '==', user.uid), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        setOrders(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) { console.warn('fetch orders', e); }
    })();
  }, [user]);

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700' }}>Mis Pedidos</Text>
      <FlatList
        data={orders}
        keyExtractor={o => o.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor:'#fff', padding:10, marginVertical:6, borderRadius:8 }}>
            <Text style={{ fontWeight:'700' }}>Pedido #{item.id}</Text>
            <Text>Total: ${item.total}</Text>
            <Text>Estado: {item.status}</Text>
          </View>
        )}
      />
      {orders.length === 0 && <Text style={{ marginTop:12 }}>No hay pedidos recientes.</Text>}
    </Layout>
  );
}
