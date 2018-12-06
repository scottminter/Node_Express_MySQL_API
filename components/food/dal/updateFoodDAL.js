const BProm = require('bluebird')
const _ = require('lodash');
const mysql = require('./../../utils/mysql');

module.exports = function updateFoodDAL (foodData) {
    let success = 0;

    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `CALL update_food('${foodData.food}', '${foodData.taste}');`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

                    if (err) {
                        return reject(err);
                    }

                    success = _.get(results, '[0][0].success');
                    if (success === 0) {
                        return reject({
                            message: _.get(results, '[0][0].message'),
                            statusCode: 400
                        });
                    } else {
                        return resolve(_.get(results, '[0][0]', {}));
                    }
                });
            })
    });
};
