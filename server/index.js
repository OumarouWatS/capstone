const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Rover App backend set up for Capstone');
}) 

app.listen(3000, () => {
    console.log('Port is listening');
});