const BProm = require('bluebird');
const utils = require('./../../utils');

module.exports = function getFoodByIdDAL (id) {
    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.foods_view WHERE id = ${id};`;

                conn.query(qry, (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(results[0] || {});
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
