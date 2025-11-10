import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';

export default function RegistroScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
    <Layout>
      <Text style={styles.title}>Crear Cuenta</Text>

      <Input placeholder="Nombre completo" value={nombre} onChangeText={setNombre} />
      <Input placeholder="Correo electrónico" value={correo} onChangeText={setCorreo} />
      <Input placeholder="Número telefónico" value={telefono} onChangeText={setTelefono} />
      <Input placeholder="Contraseña" value={contraseña} onChangeText={setContraseña} secureTextEntry />

      <ButtonRounded text="Registrarme" onPress={() => navigation.navigate('Login')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
});
