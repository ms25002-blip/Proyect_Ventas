import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Layout, ButtonRounded } from '../components';
import { CartContext } from '../context/CartContext';

export default function DetalleProductoScreen({ route, navigation }) {
  const { product } = route.params || {};
  const { addItem } = useContext(CartContext);

  if (!product) return <Layout><Text>No hay producto seleccionado</Text></Layout>;

  return (
    <Layout>
      {product.image ? <Image source={{ uri: product.image }} style={{ width:'100%', height:200, borderRadius:8, marginBottom:12 }} /> : null}
      <Text style={{ fontSize:22, fontWeight:'700' }}>{product.name}</Text>
      <Text style={{ marginBottom:12 }}>${product.price}</Text>
      <Text style={{ marginBottom:12 }}>{product.description || 'Sin descripción'}</Text>
      <ButtonRounded text="Agregar al carrito" onPress={() => { addItem(product); navigation.navigate('Carrito'); }} />
    </Layout>
  );
}
