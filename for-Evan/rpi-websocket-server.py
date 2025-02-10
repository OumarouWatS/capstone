from websocket_server import WebsocketServer
import json

# This function will handle incoming messages from the React Native app
def on_message(client, server, message):
    print(f"Received message: {message}")
    
    # Send a message back to the React Native app
    server.send_message(client, json.dumps({"message": "Hello from Raspberry Pi!"}))

# This function will run when a client connects
def on_client_connect(client, server):
    print(f"New client connected: {client['address']}")

# This function will run when a client disconnects
def on_client_disconnect(client, server):
    print(f"Client disconnected: {client['address']}")

# Create a WebSocket server on port 3000
server = WebsocketServer(host='0.0.0.0', port=3000)

# Register the message handler functions
server.set_fn_message_received(on_message)
server.set_fn_client_left(on_client_disconnect)
server.set_fn_client_joined(on_client_connect)

# Start the server to listen for WebSocket connections
print("WebSocket server is running on ws://<raspberry_pi_ip>:3000")
server.run_forever()
