const express = require('express');
const router = express.Router();
const Tuner = require('../models/tuner');

router.get('/tuners', (req, res) => {
    res.send({type: 'GET'});
});

router.post('/tuners', (req, res) => {
    res.send({type: 'POST'});
});

router.put('/tuners/:id', (req, res) => {
    res.send({type: 'PUT'});
});

router.delete('/tuners/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;