import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function PerfilScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text>Nombre: Usuario Demo</Text>
      <Text>Correo: demo@example.com</Text>

      <ButtonRounded
        text="Cerrar sesión"
        color="#dc3545"
        onPress={() => navigation.replace('Login')}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
});
