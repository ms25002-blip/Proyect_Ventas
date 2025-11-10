import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function PagosScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Métodos de Pago</Text>
      <Text>Tarjeta, Paypal o efectivo</Text>

      <ButtonRounded text="Confirmar pago" onPress={() => navigation.navigate('CompraConfirmada')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
