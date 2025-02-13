import React, { useState } from 'react';
import ControlButton from '@/components/ControlButton';
import { View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RoverController: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [status, setStatus] = useState<string>('Idle');

  // Action Handlers
  const handleStart = () => {
    setIsStarted(true);
    setStatus('Started');
  };

  const handleStop = () => {
    setIsStarted(false);
    setStatus('Stopped');
  };

  const handleMoveForward = () => {
    if (isStarted) {
      setStatus('Moving Forward');
    }
  };

  const handleMoveBack = () => {
    if (isStarted) {
      setStatus('Moving Backward');
    }
  };

  const handleTurnLeft = () => {
    if (isStarted) {
      setStatus('Turning Left');
    }
  };

  const handleTurnRight = () => {
    if (isStarted) {
      setStatus('Turning Right');
    }
  };

  return (
   <View style={styles.controller}>
    <View style={styles.buttonRow}>
      <ControlButton label="Start" onClick={handleStart} disabled={isStarted} style={styles.startButton} iconName='play-arrow' iconColor='green'/>
      <ControlButton label="Stop" onClick={handleStop} disabled={!isStarted} style={styles.stopButton} iconName='stop' iconColor='red' />
    </View>
    
    <View style={styles.buttonRow}>
      <ControlButton label="Forward" onClick={handleMoveForward} disabled={!isStarted} style={styles.forwardButton} iconName='arrow-forward' iconColor='blue' />
      <ControlButton label="Back" onClick={handleMoveBack} disabled={!isStarted} style={styles.backButton} iconName='arrow-back' iconColor='yellow' />      
      <ControlButton label="Left" onClick={handleTurnLeft} disabled={!isStarted} style={styles.leftButton} iconName='rotate-left' iconColor='purple' />      
      <ControlButton label="Right" onClick={handleTurnRight} disabled={!isStarted} style={styles.rightButton} iconName='rotate-right' iconColor='orange' />
    </View>
   </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  controller: {
    backgroundColor: '#B0B0B0',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    width: '100%',
  },
  startButton: {
    padding: 10,
    borderRadius: 5,
  },
  stopButton: {
    padding: 10,
    borderRadius: 5,
  },
  forwardButton: {
    padding: 10,
    borderRadius: 5,
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
  },
  leftButton: {
    padding: 10,
    borderRadius: 5,
  },
  rightButton: {
    padding: 10,
    borderRadius: 5,
  },
});

export default RoverController;