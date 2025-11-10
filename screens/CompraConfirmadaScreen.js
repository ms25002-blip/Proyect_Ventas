import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function CompraConfirmadaScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>¡Compra Exitosa!</Text>
      <Text>Tu pedido fue registrado correctamente.</Text>

      <ButtonRounded text="Volver al inicio" onPress={() => navigation.navigate('Main')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '800', marginBottom: 12 },
});
