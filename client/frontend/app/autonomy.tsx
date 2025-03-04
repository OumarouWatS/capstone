import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

export default function App(){
  return(
    <View>
      <MapView style={styles.map}></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
    top: '20%',
    padding: 5,
  }
})