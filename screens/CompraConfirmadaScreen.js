import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Layout, ButtonRounded } from '../components';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function CompraConfirmadaScreen({ navigation, route }) {
  const { orderId } = route.params || {};
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!orderId) return;
    (async () => {
      try {
        const d = await getDoc(doc(db, 'orders', orderId));
        if (d.exists()) setOrder({ id: d.id, ...d.data() });
      } catch (e) { console.warn(e); }
    })();
  }, [orderId]);

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'800', marginBottom:8 }}>¡Compra confirmada!</Text>
      {order ? (
        <View>
          <Text>Número de pedido: #{order.id}</Text>
          <Text>Total: ${order.total?.toFixed ? order.total.toFixed(2) : order.total}</Text>
          <Text>Estado: {order.status}</Text>
        </View>
      ) : (
        <Text>Generando ...</Text>
      )}
      <ButtonRounded text="Volver al inicio" onPress={() => navigation.navigate('Main')} />
    </Layout>
  );
}
