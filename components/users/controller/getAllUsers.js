const BProm = require('bluebird');
const _ = require('lodash');
const usersDal = require('./../dal');

module.exports = function getAllUsers () {
    return new BProm((resolve, reject) => {
        usersDal.getAllUsersDAL()
            .then((users) => {
                // change the food names from a CSV to an array
                if (users.length > 0) {
                    users.forEach((user, i) => {
                        users[i].foods = _.split(user.foods, ',');
                    });
                }

                return resolve(users);
            });
    });
};
