let getByObject = {};

getByObject.id = require('./getById');
getByObject.name = require('./getByName');

module.exports = getByObject;
