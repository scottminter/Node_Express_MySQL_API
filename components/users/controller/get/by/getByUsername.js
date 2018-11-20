const BProm = require('bluebird');
const _ = require('lodash');
const userDal = require('./../../../dal');

module.exports = function getUserByUsername (req) {
    return new BProm((resolve, reject) => {
        if (!req.params.username) {
           return reject('No Username Provided');
        }

        userDal.getUserByUsername(req.params.username)
            .then((user) => {
                return resolve(user);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
