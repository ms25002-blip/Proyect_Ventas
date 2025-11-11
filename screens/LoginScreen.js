import React, { useContext, useState } from 'react';
import { Text, Alert } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onLogin = async () => {
    try {
      await login(email.trim(), pass);
      Alert.alert("Bienvenido", "Inicio de sesión exitoso");
    } catch (e) {
      let msg = "Error desconocido";
      if (e.code === "auth/user-not-found") msg = "Usuario no encontrado";
      if (e.code === "auth/wrong-password") msg = "Contraseña incorrecta";
      if (e.code === "auth/invalid-email") msg = "Correo inválido";
      Alert.alert("Error", msg);
    }
  };

  return (
    <Layout>
      <Text style={{ fontSize: 26, fontWeight: '700', marginBottom: 12 }}>Iniciar Sesión</Text>
      <Input placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Contraseña" value={pass} onChangeText={setPass} secureTextEntry />
      <ButtonRounded text="Entrar" onPress={onLogin} />
      <ButtonRounded text="¿No tienes cuenta? Crear una" color="#6c757d" onPress={() => navigation.navigate('Registro')} />
    </Layout>
  );
}
