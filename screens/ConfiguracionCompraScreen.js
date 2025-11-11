import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';

export default function ConfiguracionCompraScreen({ navigation }) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');

  const onContinue = () => {
    if (!address.trim() || !phone.trim()) {
      Alert.alert('Error', 'Ingresa dirección y teléfono');
      return;
    }
    navigation.navigate('Pagos', { address, phone, paymentMethod });
  };

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700' }}>Configurar Compra</Text>
      <Input placeholder="Dirección de entrega" value={address} onChangeText={setAddress} />
      <Input placeholder="Teléfono" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Input placeholder="Método de pago (Efectivo / Tarjeta / PayPal)" value={paymentMethod} onChangeText={setPaymentMethod} />
      <ButtonRounded text="Continuar a pagos" onPress={onContinue} />
    </Layout>
  );
}