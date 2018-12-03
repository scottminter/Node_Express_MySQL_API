let userController = {};

userController.get = require('./get');
userController.create = require('./create');
userController.update = require('./update');
userController.delete = require('./delete');

module.exports = userController;