import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Layout } from '../components';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const sampleProducts = [
  { name: 'Audífonos Bluetooth', price: 19.99, description: 'Inalámbricos', image: 'https://i.imgur.com/8Km9tLL.jpeg' },
  { name: 'Smartwatch Fit', price: 29.99, description: 'Controla tu actividad', image: 'https://i.imgur.com/UPrs1EW.jpeg' },
  { name: 'Cargador USB-C', price: 9.99, description: 'Carga rápida', image: 'https://i.imgur.com/DvpvklR.jpeg' },
];

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const snap = await getDocs(collection(db, 'products'));
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) { console.warn(e); }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const seed = async () => {
    try {
      for (const p of sampleProducts) {
        await addDoc(collection(db, 'products'), p);
      }
      Alert.alert('Seed', 'Productos agregados a Firestore');
      fetchProducts();
    } catch (e) { Alert.alert('Error', e.message); }
  };

  return (
    <Layout>
      <Text style={styles.title}>Productos Destacados</Text>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetalleProducto', { product: item })}>
            {item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onLongPress={seed} style={styles.exploreButton}>
          <Text style={styles.exploreText}>Mantén presionado para agregar productos de ejemplo</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '800', marginBottom: 8 },
  card: { width: 160, backgroundColor:'#fff', marginRight:12, borderRadius:12, padding:10 },
  image: { width:'100%', height:110, borderRadius:10, marginBottom:8 },
  name: { fontWeight:'700', fontSize:14 },
  price: { fontWeight:'600', color:'#007bff' },
  exploreButton: { marginTop:8, padding:12, borderRadius:8, backgroundColor:'#007bff', alignItems:'center' },
  exploreText: { color:'#fff' }
});
