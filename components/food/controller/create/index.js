const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const schema = require('../../schemas/foodSchema');

module.exports = function createNewFood(reqBody) {
    let isValid = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, schema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        DAL.createNewFood(isValid.value)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });    
};
