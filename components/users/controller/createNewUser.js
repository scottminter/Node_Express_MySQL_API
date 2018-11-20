const BProm = require('bluebird');
const _ = require('lodash');
const Joi = require('joi');
const usersDal = require('./../dal');
const createUserSchema = require('./../schemas/createUserSchema');

module.exports = function createNewUser(reqBody) {
    let isValid = {}
        , newUserData = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, createUserSchema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        newUserData = isValid.value;

        usersDal.createNewUser(newUserData)
            .then((results) => {
                return resolve(results);
            });
    });
};
