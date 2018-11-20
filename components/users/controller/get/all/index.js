const BProm = require('bluebird');
const _ = require('lodash');
const usersDal = require('./../../../dal');

module.exports = function getAllUsers () {
    return new BProm((resolve, reject) => {
        usersDal.getAllUsers()
            .then((users) => {
                return resolve(users);
            });
    });
};