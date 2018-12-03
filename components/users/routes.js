const Express = require('express');
const router = Express.Router();
const _ = require('lodash');
const users = require('./controller');

/**
 * Get all Users
 */
router.get('/', (req, res) => {
    users.get.all()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Get single User by id
 */
router.get('/id/:id', (req, res) => {
    let userId = _.get(req, 'params.id');

    users.get.by.id(userId)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Get User by username
 */
router.get('/username/:username', (req, res) => {
    let username = _.get(req, 'params.username');

    users.get.by.username(username)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Post new User (create)
 */
router.post('/', (req, res) => {
    users.create(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
});

/**
 * Put User (update)
 */
router.put('/', (req, res) => {
    users.update(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Delete User (delete)
 */
router.delete('/', (req, res) => {
    users.delete(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;
