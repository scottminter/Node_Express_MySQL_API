const Express = require('express');
const router = Express.Router();
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
    users.get.by.id(req)
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
    users.get.by.username(req)
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

/**
 * Delete User (delete)
 */

module.exports = router;