const Express = require('express');
const router = Express.Router();
const users = require('./controller');

/**
 * Get all Users
 */
router.get('/', (req, res) => {
    users.getAllUsers()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Get individual User by id
 */
router.get('/:id', (req, res) => {
    users.getUserById(req)
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


/**
 * Put User (update)
 */

/**
 * Delete User (delete)
 */

module.exports = router;