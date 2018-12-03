let foodController = {};

foodController.get = require('./get');
foodController.create = require('./create');
foodController.update = require('./update');
foodController.delete = require('./delete');

module.exports = foodController;
