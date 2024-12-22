import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GalacticCounter: React.FC = () => {
  const [stars, setStars] = useState<number>(0);

  const handleStarChange = (change: number) => {
    setStars((prevStars) => Math.max(0, prevStars + change)); // Prevent stars from going negative
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galactic Counter</Text>
      <Text style={styles.starCount}>Stars: {stars}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => handleStarChange(1)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decreaseButton]}
          onPress={() => handleStarChange(-1)}
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  starCount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ff8c00',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  addButton: {
    backgroundColor: '#32cd32',
  },
  decreaseButton: {
    backgroundColor: '#ff4500',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default GalacticCounter;