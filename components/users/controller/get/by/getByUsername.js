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
            .then((user) => {
                user.foods = helpers.getArrayFromCSV(user.foods);

                return resolve(user);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
