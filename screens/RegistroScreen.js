import React, { useContext, useState } from 'react';
import { Text, Alert } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';
import { AuthContext } from '../context/AuthContext';

export default function RegistroScreen({ navigation }) {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onRegister = async () => {
    try {
      await register({ name, email, password: pass });
      Alert.alert("Cuenta creada", "Ya puedes iniciar sesión");
      navigation.navigate("Login");
    } catch (e) {
      let msg = "Error desconocido";
      if (e.code === "auth/email-already-in-use") msg = "Este correo ya está registrado";
      if (e.code === "auth/weak-password") msg = "La contraseña debe tener 6 caracteres o más";
      if (e.code === "auth/invalid-email") msg = "Correo inválido";
      Alert.alert("Error", msg);
    }
  };

  return (
    <Layout>
      <Text style={{ fontSize: 26, fontWeight: '700', marginBottom: 12 }}>Crear Cuenta</Text>
      <Input placeholder="Nombre completo" value={name} onChangeText={setName} />
      <Input placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Contraseña" value={pass} onChangeText={setPass} secureTextEntry />
      <ButtonRounded text="Crear Cuenta" onPress={onRegister} />
    </Layout>
  );
}
