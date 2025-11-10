import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout } from '../components';

export default function NotificacionesScreen() {
  return (
    <Layout>
      <Text style={styles.title}>Notificaciones</Text>
      <Text>No tienes notificaciones nuevas.</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
