const BProm = require('bluebird')
const _ = require('lodash');
const mysql = require('./../../utils/mysql');

module.exports = function deleteFood(foodObj) {
console.log('del food dal', foodObj);    
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `CALL delete_food(${foodObj.id}, '${foodObj.name}');`;

                conn.query(qry, (err, results, fields) => {
                    if (err) {
                        return reject({
                            code: 400,
                            message: err
                        });
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
            .catch((err) => {
                return reject(err);
            });
    });
};
