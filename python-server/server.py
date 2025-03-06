import asyncio
from flask import Flask, jsonify
from bleak_client import communicate_ble  # Import the BLE function
from concurrent.futures import ThreadPoolExecutor

app = Flask(__name__)

# Use ThreadPoolExecutor to run the async function in a separate thread
executor = ThreadPoolExecutor(max_workers=1)

def run_ble_communication():
    # Run the asynchronous BLE function in an asyncio event loop
    return asyncio.run(communicate_ble())

# Flask route to handle React Native request and trigger BLE communication
@app.route('/')
def communicate():
    # Submit the BLE communication task to the thread pool
    response = executor.submit(run_ble_communication).result()
    # Return both hello world text and JSON response
    return 'hello world<br>' + f'<pre>{jsonify({"message": response})}</pre>'

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
