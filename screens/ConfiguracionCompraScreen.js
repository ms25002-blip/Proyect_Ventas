import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function ConfiguracionCompraScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Configurar Compra</Text>
      <Text>Dirección, método de pago y cantidad</Text>

      <ButtonRounded text="Ir a pagos" onPress={() => navigation.navigate('Pagos')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
