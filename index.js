const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/pianoTunerLocater');

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

//Error handler
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, () => console.log('now listening for requests'));