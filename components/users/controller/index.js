let userController = {};

userController.get = require('./get');
userController.create = require('./create');
userController.update = require('./update');

module.exports = userController;