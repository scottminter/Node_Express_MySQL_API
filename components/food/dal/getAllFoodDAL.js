const BProm = require('bluebird');
const utils = require('./../../utils');

module.exports = function getAllUsersDAL () {
    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.foods_view;`;

                conn.query(qry, (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(results || []);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    });
};
