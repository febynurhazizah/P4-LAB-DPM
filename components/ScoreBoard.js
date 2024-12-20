import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WinnerModal from './WinnerModal';

const ScoreBoard = ({ teamA, teamB }) => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    if (teamAScore === 10) {
      setWinner(teamA);
      setResetTrigger(true);
    } else if (teamBScore === 10) {
      setWinner(teamB);
      setResetTrigger(true);
    }
  }, [teamAScore, teamBScore]);

  useEffect(() => {
    if (resetTrigger) {
      setTeamAScore(0);
      setTeamBScore(0);
      setResetTrigger(false);
    }
  }, [resetTrigger]);

  const incrementTeamAScore = () => {
    if (teamAScore < 10) {
      setTeamAScore(teamAScore + 1);
    }
  };

  const decrementTeamAScore = () => {
    if (teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    }
  };

  const incrementTeamBScore = () => {
    if (teamBScore < 10) {
      setTeamBScore(teamBScore + 1);
    }
  };

  const decrementTeamBScore = () => {
    if (teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  const closeModal = () => {
    setWinner('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.scoreText}>{teamAScore}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={incrementTeamAScore}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrementTeamAScore}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.scoreText}>{teamBScore}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={incrementTeamBScore}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrementTeamBScore}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Scores</Text>
      </TouchableOpacity>
      <WinnerModal visible={!!winner} winner={winner} onClose={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff30',
    padding: 20,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  teamName: {
    fontSize: 24,
    color: '#FFC107',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  scoreText: {
    fontSize: 48,
    color: '#FFC107',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8BC34A',
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  resetButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
