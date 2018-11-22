let userDAL = {};

userDAL.getAllUsers = require('./getAllUsersDAL');
userDAL.getUserById = require('./getUserByIdDAL');
userDAL.getUserByUsername = require('./getUserByUsernameDAL');
userDAL.createNewUser = require('./createNewUserDAL');
userDAL.updateUser = require('./updateUserDAL');

module.exports = userDAL;