const BProm = require('bluebird');
const Joi = require('joi');
const Dal = require('../../dal');
const schema = require('../../schemas/userFoodPreference');

module.exports = function addFoodPreference (userId, reqBody) {
    let isValid = {};

    return new BProm((resolve, reject) => {
        if (!userId) {
            return reject({
                code: 400,
                error: 'User ID is required'
            });
        }

        isValid = Joi.validate(reqBody, schema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        Dal.addFoodPreference(userId, reqBody)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
