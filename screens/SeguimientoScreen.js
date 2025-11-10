import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout } from '../components';

export default function SeguimientoScreen() {
  return (
    <Layout>
      <Text style={styles.title}>Seguimiento de Pedido</Text>
      <Text>Estado: En camino</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
