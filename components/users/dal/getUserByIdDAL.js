const BProm = require('bluebird');
const mysql = require('./../../utils').mysql;

module.exports = function getUserByIdDAL (id) {
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.users_view WHERE id = ${id};`;

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
