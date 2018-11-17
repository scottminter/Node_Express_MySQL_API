let userController = {};

userController.getAllUsers = require('./getAllUsers');
userController.getUserById = require('./getUserById');

module.exports = userController;