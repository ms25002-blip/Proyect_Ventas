import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonRounded({ text, onPress, color = '#007BFF' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
