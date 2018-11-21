const BProm = require('bluebird');
const _ = require('lodash');
const userDal = require('./../../../dal');

module.exports = function getUserById (userId) {
    return new BProm((resolve, reject) => {
        if (!userId) {
           return reject({
                statusCode: 400,
                message: 'No ID Provided'
            });
        }

        userDal.getUserById(userId)
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