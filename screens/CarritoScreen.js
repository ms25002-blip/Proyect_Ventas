import React, { useContext } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Layout, ButtonRounded } from '../components';
import { CartContext } from '../context/CartContext';

export default function CarritoScreen({ navigation }) {
  const { cart, removeItem, updateQty, clear } = useContext(CartContext);

  const subtotal = cart.reduce((s, p) => s + (p.price || 0) * (p.qty || 1), 0);
  const shipping = subtotal > 0 ? 3.5 : 0;
  const total = subtotal + shipping;

  return (
    <Layout>
      <Text style={styles.title}>Carrito de Compras</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={{ marginTop: 20 }}>El carrito está vacío.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text>Precio: ${item.price}</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => updateQty(item.id, Math.max(1, item.qty - 1))} style={styles.qtyButton}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.qty}</Text>
              <TouchableOpacity onPress={() => updateQty(item.id, item.qty + 1)} style={styles.qtyButton}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={{ color: 'red' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={{ marginTop: 14 }}>
          <Text style={styles.amount}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text style={styles.amount}>Envío: ${shipping.toFixed(2)}</Text>
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>

          <ButtonRounded text="Configurar compra" onPress={() => navigation.navigate('ConfigCompra')} />
          <ButtonRounded text="Vaciar carrito" color="#dc3545" onPress={clear} />
        </View>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 },
  productName: { fontWeight: '700', fontSize: 16, marginBottom: 4 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyButton: { backgroundColor: '#eee', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  qtyText: { marginHorizontal: 10, fontSize: 16 },
  removeButton: { marginLeft: 'auto' },
  amount: { fontSize: 18, fontWeight: '700' },
  total: { fontSize: 20, fontWeight: '800', marginTop: 6 },
});
