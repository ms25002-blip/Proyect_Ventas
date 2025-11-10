import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function CarritoScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Carrito de Compras</Text>
      <Text>Productos agregados</Text>

      <ButtonRounded text="Configurar compra" onPress={() => navigation.navigate('ConfigCompra')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
