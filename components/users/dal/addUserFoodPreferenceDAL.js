const BProm = require('bluebird')
const _ = require('lodash');
const mysql = require('../../utils').mysql;

module.exports = function addUserFoodPreference (userId, likedFood) {
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `CALL add_food_to_user(${userId}, ${likedFood.foodId}, '${likedFood.foodName}');`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

                    if (err) {
                        return reject(err);
                    }

                    if (!results[0][0].success) {
                        return reject({
                            code: 401,
                            error: results[0][0].message
                        });
                    }

                    return resolve(results[0][0]);
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
