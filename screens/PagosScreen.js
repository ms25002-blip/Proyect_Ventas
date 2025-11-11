import React, { useContext, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Layout, ButtonRounded } from '../components';
import { CartContext } from '../context/CartContext';

export default function PagosScreen({ navigation, route }) {
  const { address, phone, paymentMethod } = route.params || {};
  const { createOrder } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      const orderId = await createOrder({ address, phone, paymentMethod });
      setLoading(false);
      navigation.replace('CompraConfirmada', { orderId });
    } catch (e) {
      setLoading(false);
      Alert.alert('Error', e.message || 'No se pudo crear el pedido');
    }
  };

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700' }}>Revisar y Pagar</Text>
      <Text style={{ marginVertical:8 }}>Dirección: {address}</Text>
      <Text>Teléfono: {phone}</Text>
      <Text>Método: {paymentMethod}</Text>

      <ButtonRounded text={loading ? 'Procesando...' : 'Confirmar pago'} onPress={onConfirm} />
    </Layout>
  );
}

