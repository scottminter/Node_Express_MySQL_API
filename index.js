const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

let app = express()
    , users = require('./components/users/routes')
    , food = require('./components/food/routes')
    , mysql = require('./components/utils').mysql
    , port = 8080;

// allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// handle json parsing
app.use(bodyParser.json());

/**
 * Verifies the API is working
 */
app.get('/', (req, res) => {
    res.json({ 'message': 'Demo API is working!' });
});

/**
 * Verifies MySQL Connection is working
 */
app.get('/mysql', (req, res) => {
    mysql.connect()
        .then((conn) => {
            let qry = `SELECT status FROM demo_api.health_check;`;

            conn.query(qry, (err, results, fields) => {
                conn.end();

                if (err) {
                    throw err;
                }

                if (_.get(results, '[0].status')) {
                    res.json({message: results[0].status});
                } else {
                    throw new Error('No DB Connection');
                }
            });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

/**
 * Set up routes from components
 */
app.use('/users', users);
app.use('/food', food);

// define port the api runs on
app.listen(port);
console.log('API started on port: ' + port);
