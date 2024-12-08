import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onReset} style={styles.button}>
        <Text style={styles.text}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000000', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetButton;
