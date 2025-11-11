import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';

export default function BienvenidaScreen({ navigation }) {
  return (
    <Layout>
      <View style={styles.center}>
        <Text style={styles.title}>T-LEN</Text>
        <Text style={styles.subtitle}>Bienvenido a tu tienda móvil</Text>

        <ButtonRounded text="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
        <ButtonRounded text="Registrarse" color="#28a745" onPress={() => navigation.navigate('Registro')} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  center: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:36, fontWeight:'800' },
  subtitle: { marginBottom:20, color:'#555' }
});
