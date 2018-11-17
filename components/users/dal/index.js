let userDAL = {};

userDAL.getAllUsersDAL = require('./getAllUsersDAL');
userDAL.getUserById = require('./getUserByIdDAL');

module.exports = userDAL;