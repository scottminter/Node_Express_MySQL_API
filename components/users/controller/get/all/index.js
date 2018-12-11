const BProm = require('bluebird');
const _ = require('lodash');
const helpers = require('./../../../../utils').helpers;
const usersDal = require('./../../../dal');

module.exports = function getAllUsers () {
    return new BProm((resolve, reject) => {
        usersDal.getAllUsers()
            .then((users) => {
                for (let i = 0; i < users.length; i++) {
                    users[i].foods = helpers.getArrayFromCSV(users[i].foods);
                }

                return resolve(users);
            });
    });
};
