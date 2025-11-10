import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function DetalleProductoScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Detalle del Producto</Text>
      <Text>Descripción, imágenes y precio</Text>

      <ButtonRounded text="Agregar al carrito" onPress={() => navigation.navigate('Carrito')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
