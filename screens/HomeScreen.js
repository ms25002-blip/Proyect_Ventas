import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Layout } from '../components';

const productosDestacados = [
  {
    id: '1',
    name: 'Auriculares Bluetooth',
    price: 19.99,
    image: 'https://i.imgur.com/8Km9tLL.jpeg',
  },
  {
    id: '2',
    name: 'Smartwatch Fit',
    price: 29.99,
    image: 'https://i.imgur.com/UPrs1EW.jpeg',
  },
  {
    id: '3',
    name: 'Cargador Rápido USB-C',
    price: 9.99,
    image: 'https://i.imgur.com/DvpvklR.jpeg',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <Layout>
      <Text style={styles.title}>Productos Destacados</Text>
      <Text style={styles.subtitle}>Lo más comprado esta semana</Text>

      <FlatList
        data={productosDestacados}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('DetalleProducto', { product: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={styles.subtitle}>Explorar más productos</Text>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Explorador')}
        >
          <Text style={styles.exploreText}>Ir al explorador</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  card: {
    width: 160,
    backgroundColor: '#fff',
    marginRight: 12,
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontWeight: '600',
    color: '#007bff',
  },
  exploreButton: {
    marginTop: 8,
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  exploreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
