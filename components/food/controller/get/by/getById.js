const BProm = require('bluebird');
const _ = require('lodash');
const DAL = require('./../../../dal');

module.exports = function getFoodById (id) {
    return new BProm((resolve, reject) => {
        DAL.getFoodById(id)
            .then((food) => {
                return resolve(food);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
