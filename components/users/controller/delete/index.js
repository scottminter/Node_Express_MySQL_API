const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const schema = require('./../../schemas/deleteUserSchema');
const helpers = require('./../../../utils').helpers;

module.exports = function deleteUser (userData) {
    let isValid = {}
        , deleteUserData = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(userData, schema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        deleteUserData = isValid.value;        
        deleteUserData.password = helpers.getPasswordHash(deleteUserData.password);

        DAL.deleteUser(deleteUserData)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
