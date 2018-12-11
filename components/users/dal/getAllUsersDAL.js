const BProm = require('bluebird');
const mysql = require('./../../utils').mysql;

module.exports = function getAllUsersDAL () {
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.users_with_food_view;`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

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
