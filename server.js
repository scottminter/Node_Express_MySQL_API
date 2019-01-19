const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

let app = express()
    , healthCheck = require('./components/healthChecks/routes')
    , users = require('./components/users/routes')
    , food = require('./components/food/routes')
    , port = 8081;

// allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// handle json parsing
app.use(bodyParser.json());

// Set up routes from components
app.use('/health', healthCheck);
app.use('/users', users);
app.use('/food', food);

// define port the api runs on
app.listen(port);
console.log('API started on port: ' + port);
