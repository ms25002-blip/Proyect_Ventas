import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function ExploradorScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Explorar Productos</Text>
      <Text>Puedes buscar y filtrar productos</Text>

      <ButtonRounded
        text="Ver detalle"
        onPress={() => navigation.navigate('DetalleProducto')}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
