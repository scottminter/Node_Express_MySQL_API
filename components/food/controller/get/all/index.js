const BProm = require('bluebird');
const _ = require('lodash');
const DAL = require('./../../../dal');

module.exports = function getAllFood () {
    return new BProm((resolve, reject) => {
        DAL.getAllFood()
            .then((users) => {
                return resolve(users);
            });
    });
};
