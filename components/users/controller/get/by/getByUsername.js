const BProm = require('bluebird');
const _ = require('lodash');
const helpers = require('./../../../../utils').helpers;
const DAL = require('./../../../dal');

module.exports = function getUserByUsername (username) {
    return new BProm((resolve, reject) => {
        if (!username) {
           return reject({
               statusCode: 400,
                message: 'No Username Provided'
            });
        }

        DAL.getUserByUsername(username)
            .then((users) => {
                for (let i = 0; i < users.length; i++) {
                    users[i].foods = helpers.getArrayFromCSV(users[i].foods);
                }

                return resolve(users);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
