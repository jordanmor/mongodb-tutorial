const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/pianoTunerLocater');

app.use(bodyParser.json());

app.listen(process.env.port || 3000, () => console.log('now listening for requests'));