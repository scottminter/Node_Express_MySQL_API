const BProm = require('bluebird');
const mysql = require('./../../utils').mysql;

module.exports = function getFoodByNameDAL (name) {
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.foods_view WHERE name = '${name}';`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

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
