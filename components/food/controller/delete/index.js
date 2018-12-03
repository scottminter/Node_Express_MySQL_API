const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const schema = require('../../schemas/deleteFoodSchema');

module.exports = function deleteFood(foodObj) {
    let isValid = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(foodObj, schema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        DAL.deleteFood(isValid.value)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
