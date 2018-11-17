const express = require('express');
const bodyParser = require('body-parser');

let app = express()
    , users = require('./components/users/routes')
    //, food = require('./components/food/routes')
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
    res.json({ 'message': 'Food Truck API is working!' });
});

/**
 * Set up routes from components
 */
app.use('/users', users);
//app.use('/food', food);

// define port the api runs on
app.listen(port);
console.log('API started on port: ' + port);