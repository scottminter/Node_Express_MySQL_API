const CryptoJS = require('crypto-js');

let helpers = {};

helpers.getPasswordHash = function getPasswordHash (pw) {
    return CryptoJS.SHA256(pw).toString();
}

module.exports = helpers;