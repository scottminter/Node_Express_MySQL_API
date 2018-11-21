const BProm = require('bluebird');
const Joi = require('joi');
const CryptoJS = require('crypto-js');
const usersDal = require('./../../dal');
const createUserSchema = require('./../../schemas/createUserSchema');

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
        newUserData.password = CryptoJS.SHA256(newUserData.password + '-' + newUserData.username).toString();

        usersDal.createNewUser(newUserData)
            .then((results) => {
                return resolve({newUserId: results[0][0].newUserId});
            })
            .catch((err) => {
                return reject(err);
            })
    });
};