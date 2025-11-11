import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Layout, ButtonRounded } from '../components';
import { AuthContext } from '../context/AuthContext';

export default function PerfilScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700' }}>Perfil</Text>
      <Text>Nombre: {user?.displayName || 'Usuario Demo'}</Text>
      <Text>Email: {user?.email}</Text>
      <ButtonRounded text="Cerrar sesión" color="#dc3545" onPress={() => logout()} />
    </Layout>
  );
}
