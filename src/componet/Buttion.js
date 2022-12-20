import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

export default function Buttion(props) {
  const { onPress, title, bgC } = props;
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgC }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  marginHorizontal: 15,
    paddingVertical: 15,
    marginTop:15,
    width: '43%'
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
   
    color: 'white',
    textAlign: "center"
  },
});