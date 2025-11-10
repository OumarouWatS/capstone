import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoverController from '@/components/RoverController';
import { ThemedText } from '@/components/ThemedText';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feed}>
        <Text>The rover camera feed goes here!</Text>
      </View>
      <View style={styles.controller}>
        <RoverController />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#C0C0C0', 
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  controller: {
    top: '20%',
    left: '10%',
    //margin: 5,
  },
  feed: {
    padding: 10,
    backgroundColor: '#ADD8E6', // Blue background
    borderRadius: 5,
    left: '5%',
    alignItems: 'center', // Center the text horizontally
    top: '10%',
    width: '90%',
    height: '50%',
  },
  
});

export default App;
