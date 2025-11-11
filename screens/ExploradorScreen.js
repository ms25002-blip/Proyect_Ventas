import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Layout } from '../components';
import { db } from '../firebase';
import { collection, query, orderBy, startAt, endAt, getDocs } from 'firebase/firestore';

export default function ExploradorScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProducts = async (qSearch = '') => {
    try {
      const col = collection(db, 'products');
      if (qSearch && qSearch.trim().length > 0) {
        const q = query(col, orderBy('name'), startAt(qSearch), endAt(qSearch + '\uf8ff'));
        const snap = await getDocs(q);
        setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } else {
        const q = query(col, orderBy('name'));
        const snap = await getDocs(q);
        setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    } catch (e) { console.warn(e); }
  };

  useEffect(() => { fetchProducts(); }, []);
  useEffect(() => {
    const t = setTimeout(() => fetchProducts(search.trim()), 350);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <Layout>
      <Text style={{ fontSize:22, fontWeight:'700', marginBottom:8 }}>Explorador</Text>
      <TextInput placeholder="Buscar productos..." value={search} onChangeText={setSearch} style={{ backgroundColor:'#fff', padding:10, borderRadius:8, marginBottom:10 }} />
      <FlatList
        data={products}
        keyExtractor={p => p.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetalleProducto', { product: item })} style={{ flexDirection:'row', padding:8, backgroundColor:'#fff', marginBottom:8, borderRadius:8 }}>
            {item.image ? <Image source={{ uri: item.image }} style={{ width:60, height:60, marginRight:8, borderRadius:6 }} /> : null}
            <View style={{ flex:1 }}>
              <Text style={{ fontWeight:'700' }}>{item.name}</Text>
              <Text>${item.price}</Text>
              <Text numberOfLines={2} style={{ color:'#444' }}>{item.description || ''}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
}
