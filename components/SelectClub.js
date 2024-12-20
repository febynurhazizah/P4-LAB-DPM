import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SelectClub = ({ onSetTeams }) => {
  const [teamA, setTeamA] = useState('Team A');
  const [teamB, setTeamB] = useState('Team B');

  const handleSetTeams = () => {
    onSetTeams(teamA, teamB);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Team A Name:</Text>
        <TextInput
          style={styles.input}
          value={teamA}
          onChangeText={(text) => setTeamA(text)}
          placeholder="Enter team name"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Team B Name:</Text>
        <TextInput
          style={styles.input}
          value={teamB}
          onChangeText={(text) => setTeamB(text)}
          placeholder="Enter team name"
          placeholderTextColor="#ccc"
        />
      </View>
      <TouchableOpacity style={styles.okButton} onPress={handleSetTeams}>
        <Text style={styles.okButtonText}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => onSetTeams(teamA, teamB)}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  okButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectClub;
