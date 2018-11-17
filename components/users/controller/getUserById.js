const BProm = require('bluebird');
const _ = require('lodash');
const userDal = require('./../dal');

module.exports = function getUserById (req) {
    return new BProm((resolve, reject) => {
        if (!req.params.id) {
           return reject('No ID Provided');
        }

        userDal.getUserById(req.params.id)
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
