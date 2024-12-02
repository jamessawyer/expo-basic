import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
