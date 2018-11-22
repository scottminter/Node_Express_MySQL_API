const CryptoJS = require('crypto-js');

let helpers = {};

helpers.getPasswordHash = function getPasswordHash (pw, email) {
    return CryptoJS.SHA256(pw + '-' + email).toString();
}

module.exports = helpers;