const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const createFoodSchema = require('./../../schemas/createFoodSchema');

module.exports = function createNewFood(reqBody) {
    let isValid = {}
        , newFoodData = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, createFoodSchema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        newFoodData = isValid.value; 

        DAL.createNewFood(newFoodData)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });    
};
