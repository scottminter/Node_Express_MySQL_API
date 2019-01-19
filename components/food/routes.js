const Express = require('express');
const router = Express.Router();
const _ = require('lodash');
const food = require('./controller');

// Get all food
router.get('/', (req, res) => {
    food.get.all()
        .then((foods) => {
            res.json(foods);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Get food by id
router.get('/id/:id', (req, res) => {
    let id = _.get(req, 'params.id');

    food.get.by.id(id)
        .then((food) => {
            res.json(food);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Get food by name
router.get('/name/:name', (req, res) => {
    let name = _.get(req, 'params.name');

    food.get.by.name(name)
        .then((food) => {
            res.json(food);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Insert new food
router.post('/', (req, res) => {
    food.create(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Update food
router.put('/', (req, res) => {
    food.update(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Delete food
router.delete('/', (req, res) => {
    food.delete(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;
