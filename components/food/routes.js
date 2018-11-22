const Express = require('express');
const router = Express.Router();
const _ = require('lodash');
const food = require('./controller');

/**
 * Get all Foods
 */
router.get('/', (req, res) => {
    food.get.all()
        .then((foods) => {
            res.json(foods);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Get Food by Id
 */
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

/**
 * Get Food by Name
 */
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

module.exports = router;
