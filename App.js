import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import ScoreBoard from './components/ScoreBoard';
import WinnerModal from './components/WinnerModal';
import SelectClub from './components/SelectClub';
import Welcome from './components/Welcome';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showClubSelection, setShowClubSelection] = useState(false);
  const [teamA, setTeamA] = useState('Team A');
  const [teamB, setTeamB] = useState('Team B');

  const toggleClubSelection = () => {
    setShowClubSelection(!showClubSelection);
  };

  const handleSetTeams = (teamAName, teamBName) => {
    setTeamA(teamAName);
    setTeamB(teamBName);
    setShowClubSelection(false);
  };

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  const handleBackToWelcome = () => {
    setShowWelcome(true);
  };

  const resetScores = () => {
    // Logic to reset scores if needed
  };

  if (showWelcome) {
    return <Welcome onGetStarted={handleGetStarted} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football Scoreboard</Text>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleClubSelection}>
        <Text style={styles.toggleButtonText}>
          Show Club Selection
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showClubSelection}
        onRequestClose={toggleClubSelection}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <SelectClub onSetTeams={handleSetTeams} />
          </View>
        </View>
      </Modal>
      <View style={styles.scoreBoardContainer}>
        <ScoreBoard teamA={teamA} teamB={teamB} />
      </View>
      <View style={styles.buttonSpacing}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToWelcome}>
          <Text style={styles.backButtonText}>Back to Welcome</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#FFC107',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  toggleButton: {
    backgroundColor: '#8BC34A',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonSpacing: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  scoreBoardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
