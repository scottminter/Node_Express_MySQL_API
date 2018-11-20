const BProm = require('bluebird');
const utils = require('./../../utils');

module.exports = function getUserByUsernameDAL (username) {
    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.users_view WHERE username = '${username}';`;
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