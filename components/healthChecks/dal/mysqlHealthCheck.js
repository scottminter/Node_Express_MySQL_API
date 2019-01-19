const BProm = require('bluebird');
const _ = require('lodash');
const mysql = require('./../../utils').mysql;

module.exports = function mysqlHealthCheck () {
    return new BProm((resolve, reject) => {
        mysql.connect().then((conn) => {
            let qry = `SELECT status FROM demo_api.health_check;`;

            conn.query(qry, (err, results, fields) => {
                conn.end();

                if (err) {
                    return reject({
                        code: 500,
                        error: 'Internal Server Error'
                    });
                }

                if (_.get(results, '[0].status')) {
                    return resolve(results[0].status);
                } else {
                    return resolve('No Results Found');
                }
            });
        })
        .catch((err) => {
            return reject({
                code: 500,
                error: 'Internal Server Error'
            });
        });
    });
};
