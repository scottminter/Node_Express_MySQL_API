const BProm = require('bluebird')
const _ = require('lodash');
const mysql = require('./../../utils').mysql;

module.exports = function createNewFoodDAL (newFood) {
    let newFoodId = null;

    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `call create_new_food('${newFood.food}', '${newFood.taste}');`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

                    if (err) {
                        return reject(err);
                    }

                    newFoodId = _.get(results, '[0][0].id');
                    if (newFoodId === 0) {
                        return reject({
                            message: _.get(results, '[0][0].message'),
                            statusCode: 400
                        });
                    } else {
                        return resolve(_.get(results, '[0][0]', {}));
                    }
                });

            })
            .catch((err) => {
                return reject(err);
            });
    });
};
