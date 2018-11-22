const BProm = require('bluebird');
const _ = require('lodash');
const DAL = require('./../../../dal');

module.exports = function getFoodByName (name) {
    return new BProm((resolve, reject) => {
        DAL.getFoodByName(name)
            .then((food) => {
                return resolve(food);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
