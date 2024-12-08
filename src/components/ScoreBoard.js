import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreBoard = ({ teamName, score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
});

export default ScoreBoard;
