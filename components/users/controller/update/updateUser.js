const BProm = require('bluebird');
const Joi = require('joi');
const Dal = require('./../../dal');
const schema = require('./../../schemas/updateUserSchema');
const helpers = require('./../../../utils').helpers;

module.exports = function updateUser(reqBody) {
    let isValid = {}
        , updateUserData = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, schema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        updateUserData = isValid.value;        
        updateUserData.password = helpers.getPasswordHash(updateUserData.password);

        Dal.updateUser(updateUserData)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
