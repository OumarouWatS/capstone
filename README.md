Problem Statement: 
As humanity pushes deeper into space, NASA astronauts need to be equipped with cutting-edge 
technology which includes artificial intelligence and edge computing to reach the full 
exploration potential of the Moon and Mars. During newly reimagined spacewalk missions, these 
astronauts need digital information in the form of displays and interoperability between 
spacesuits and rovers.

System Overview:
The objective of the system was to develop a display and control system for the rover operating 
in the NASA DUST virtual environment to support NASA’s Artemis missions to the moon. The project 
has 3 main component: a mobile App, a machine learning portion, and hardware. The mobile App is 
the main bridge between astronauts and hardware components. The App's name is EAGLE. This repository contains the client and server code files of the EAGLE App. Eagle wirelessly communicates with the rover (hardware component) through Python WebSocket, Flask API, and Raspberry Pi.

React Native Frontend:
1. monitor.tsx: displays rover autonomy UI, where astronauts would control the rover from
2. autonomy.tsx: integrates Apple maps into React Native with through the react-native-maps library. Allows astronauts to navigate and choose area of interest with POI (point of interest) pins.
3. index.tsx: implements welcome UI, menu and connects other app screens.

Python Backend:
1. server.py: backend logic that brings functionality to UI App screens. Sets up GET and POST request communication channels between React Native tabs and backend. Then the server establishes wireless connection and communication with websocket-server.py Raspeberry script.
2. websocket-server.py: runs on Raspberry Pi where it wirelessly receives and sends information to the React Native EAGLE App.

Raspberry Pi Set up
1. Step 1: Install WebSocket Library on Raspberry Pi
    pip install websocket-server
2. Step 2: Create a WebSocket Server 
    (see rpi-websocket-server.py)
3. Run the WebSocket Server on Raspberry Pi
    python3 websocket_server.py
4. Run the following from react native app after both set ups:
    react-native run-ios       # For iOS
