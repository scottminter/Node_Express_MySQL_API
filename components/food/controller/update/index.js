const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const foodSchema = require('../../schemas/foodSchema');

module.exports = function updateFood (reqBody) {
    console.log('can you see this');
    let isValid = {}
        , foodData = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, foodSchema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        foodData = isValid.value;

        DAL.updateFood(foodData)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};