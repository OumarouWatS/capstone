import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

interface ServerMessage {
  message: string;
}

const App = () => {
  const [serverMessage, setServerMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Connect to the Raspberry Pi WebSocket server
    const socket = new WebSocket('ws://<raspberry_pi_ip>:3000'); // Replace with Raspberry Pi's IP

    // When the WebSocket connection is established
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
      // Send a message to Raspberry Pi after connecting
      socket.send(JSON.stringify({ message: 'Hello from React Native!' }));
    };

    // When a message is received from Raspberry Pi
    socket.onmessage = (event: MessageEvent) => {
      const data: ServerMessage = JSON.parse(event.data);
      setServerMessage(data.message);  // Display message from Raspberry Pi
    };

    // Handle WebSocket errors
    socket.onerror = (error: Event) => {
      console.log('WebSocket error: ', error);
    };

    // When the WebSocket connection is closed
    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // Save the socket instance to close it later
    setWs(socket);

    // Clean up the WebSocket connection on component unmount
    return () => {
      if (socket) socket.close();
    };
  }, []);

  // Send a message to Raspberry Pi when the button is pressed
  const sendMessageToPi = () => {
    if (ws) {
      ws.send(JSON.stringify({ message: 'Hello again from React Native!' }));
    }
  };

  return (
    <View>
      <Text>Message from Raspberry Pi: {serverMessage}</Text>
      <Button title="Send Message" onPress={sendMessageToPi} />
    </View>
  );
};

export default App;

