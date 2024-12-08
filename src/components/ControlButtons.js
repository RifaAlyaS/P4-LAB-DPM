import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ControlButtons = ({ onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={onIncrement}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={onDecrement}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
    marginVertical: 10,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
  },
  incrementButton: {
    borderColor: '#265828',
    backgroundColor: '#265828',
  },
  decrementButton: {
    borderColor: '#990000',
    backgroundColor: '#990000',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ControlButtons;