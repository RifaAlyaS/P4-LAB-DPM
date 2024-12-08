import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ScoreBoard from '../components/ScoreBoard';
import ControlButtons from '../components/ControlButtons';
import ResetButton from '../components/ResetButton';
import { TEAM_A, TEAM_B, WINNING_SCORE } from '../utils/constants';

const MatchScreen = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  useEffect(() => {
    if (scoreTeamA === WINNING_SCORE) {
      Alert.alert(`${TEAM_A} menang!`);
    } else if (scoreTeamB === WINNING_SCORE) {
      Alert.alert(`${TEAM_B} menang!`);
    }
  }, [scoreTeamA, scoreTeamB]);

  const incrementScore = (team) => {
    if (team === 'A') {
      setScoreTeamA((prevScore) => prevScore + 1);
    } else {
      setScoreTeamB((prevScore) => prevScore + 1);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA((prevScore) => prevScore - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB((prevScore) => prevScore - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manajer Skor Futsal</Text>
      <View style={styles.scoreboard}>
        <View style={[styles.teamContainer, styles.teamAContainer]}>
          <ScoreBoard teamName={TEAM_A} score={scoreTeamA} />
          <ControlButtons
            onIncrement={() => incrementScore('A')}
            onDecrement={() => decrementScore('A')}
          />
        </View>
        <View style={[styles.teamContainer, styles.teamBContainer]}>
          <ScoreBoard teamName={TEAM_B} score={scoreTeamB} />
          <ControlButtons
            onIncrement={() => incrementScore('B')}
            onDecrement={() => decrementScore('B')}
          />
        </View>
      </View>
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03070a', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 20,
  },
  scoreboard: {
    width: '100%',
    backgroundColor: '#FFFFFF', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  teamContainer: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  teamAContainer: {
    backgroundColor: '#112431',
  },
  teamBContainer: {
    backgroundColor: '#4d0000',
  },
});

export default MatchScreen;
