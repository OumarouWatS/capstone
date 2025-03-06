import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Alert } from 'react-native';

export default function App() {
  const [destination, setDestination] = useState<{ latitude: number; longitude: number } | null>(null);
  const [coordinatesList, setCoordinatesList] = useState<{ latitude: number; longitude: number }[]>([]); // Store coordinates
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }); // Region state to control the map center

  // Handle the map press event
  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent; // Accessing the coordinate from nativeEvent
    setDestination(coordinate); // Set the destination state

    // Add the new coordinate to the list of coordinates
    setCoordinatesList((prevCoordinates) => [...prevCoordinates, coordinate]);

    // Center the map on the selected coordinate
    setRegion({
      ...region,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  return (
    <View style={styles.container}>
      {/* Display the list of coordinates */}
      <View style={styles.coordinatesContainer}>
        <Text style={styles.header}>Saved Coordinates:</Text>
        {coordinatesList.length > 0 ? (
          coordinatesList.map((coord, index) => (
            <Text key={index} style={styles.coordinate}>
              Latitude: {coord.latitude.toFixed(4)}, Longitude: {coord.longitude.toFixed(4)}
            </Text>
          ))
        ) : (
          <Text style={styles.coordinate}>No coordinates saved yet</Text>
        )}
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region} // Set the map region to control its center
          onPress={handleMapPress} // Handle onPress event
        >
          {destination && (
            <Marker coordinate={destination} title="POI" /> // Show Marker at the selected coordinate
          )}
        </MapView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
    top: '10%',
    padding: 10,
  },
  coordinatesContainer: {
    top: '5%',
    padding: 10,
    backgroundColor: '#90EE90',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    maxHeight: 200,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coordinate: {
    fontSize: 16,
    marginVertical: 5,
  },
});
