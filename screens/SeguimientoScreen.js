import React from 'react';
import { Text } from 'react-native';
import { Layout } from '../components';

export default function SeguimientoScreen() {
  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700' }}>Seguimiento de pedidos</Text>
      <Text>Estado: En proceso / En camino / Entregado (simulado)</Text>
    </Layout>
  );
}