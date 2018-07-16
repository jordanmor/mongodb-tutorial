const express = require('express');
const router = express.Router();
const Tuner = require('../models/tuner');

router.get('/tuners', (req, res) => {
    res.send({type: 'GET'});
});

router.post('/tuners', (req, res, next) => {
    Tuner.create(req.body)
        .then(tuner => res.send(tuner))
        .catch(next);
});

router.put('/tuners/:id', (req, res) => {
    res.send({type: 'PUT'});
});

router.delete('/tuners/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;