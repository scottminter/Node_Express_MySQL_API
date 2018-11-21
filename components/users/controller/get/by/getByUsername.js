const BProm = require('bluebird');
const _ = require('lodash');
const userDal = require('./../../../dal');

module.exports = function getUserByUsername (username) {
    return new BProm((resolve, reject) => {
        if (!username) {
           return reject({
               statusCode: 400,
                message: 'No Username Provided'
            });
        }

        userDal.getUserByUsername(username)
            .then((user) => {
                return resolve(user);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
