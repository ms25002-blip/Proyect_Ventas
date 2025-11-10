import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#777"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
});
