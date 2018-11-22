const BProm = require('bluebird')
const _ = require('lodash');
const utils = require('./../../utils');

module.exports = function createNewUserDAL (newUser) {
    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `call update_user('${newUser.username}', '${newUser.email}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}');`;

                conn.query(qry, (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!results.length > 0) {
                        return reject({
                                code: 500,
                                error: 'DB Error'
                            });
                    }
                    console.log(results[0][0]);
                    
                    if (!results[0][0].status) {
                        return reject({
                            code: 401,
                            error: results[0][0].message
                        });
                    }

                    return resolve(results[0][0]);
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
