const BProm = require('bluebird');
const _ = require('lodash');
const DAL = require('./../../../dal');

module.exports = function getUserById (userId) {
    return new BProm((resolve, reject) => {
        if (!userId) {
           return reject({
                statusCode: 400,
                message: 'No ID Provided'
            });
        }

        DAL.getUserById(userId)
            .then((user) => {
                if (user.foods) {
                    user.foods = _.split(user.foods, ',');
                }

                return resolve(user);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};