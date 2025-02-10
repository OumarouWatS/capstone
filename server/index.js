const express = require('express');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');

const app = express();
const port = 3000;

const mqttBrokerAddress = 'mqtt://192.168.1.111';
const mqttChannel = 'your/command/channel';

// MQTT Client creation
const client = mqtt.connect(mqttBrokerAddress);

// Middleware set up to parse JSON in the request body
app.use(bodyParser.json());

// Endpoint that publishes messages to the MQTT channel
app.get('/takePhoto', (req, res) => {
    const message = 'Yes';

    client.publish(mqttChannel, message, () => {
        console.log(`Message published to ${mqttChannel}: ${message}`);
        res.status(200).send('Message published successfully');
    });
});

/*
app.get('/', (req, res) => {
    res.send('<h1>Rover App backend set up for Capstone');
}) 
    */

// Starting server
app.listen(port, () => {
    console.log(`Port ${port} is listening`);
});