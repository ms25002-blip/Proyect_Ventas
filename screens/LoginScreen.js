import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Layout>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <Input placeholder="Correo electrónico" value={email} onChangeText={setEmail} />
      <Input placeholder="Contraseña" value={pass} onChangeText={setPass} secureTextEntry />

      <ButtonRounded text="Entrar" onPress={() => navigation.replace('Main')} />
      <ButtonRounded text="Olvidé mi contraseña" color="#6c757d" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
});
