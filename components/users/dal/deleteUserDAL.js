const BProm = require('bluebird');

module.exports = function deleteUser (deleteUserData) {
    return new BProm((resolve, reject) => {
        return resolve(deleteUserData);
    });
};