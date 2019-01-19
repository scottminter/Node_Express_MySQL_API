const Express = require('express');
const router = Express.Router();
const _ = require('lodash');
const mysqlCheck = require('./controller').mysql;

// API health check
router.get('/', (req, res) => {
    res.json({ 'message': 'Express MySQL Demo API is working!' });
});

// MySQL health check
router.get('/mysql', (req, res) => {
    mysqlCheck()
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => {
            res.status(err.status).send(err.error);
        });
});

module.exports = router;
