const BProm = require('bluebird')
const _ = require('lodash');
const utils = require('./../../utils');

module.exports = function createNewUserDAL (newUser) {
    let newUserId = null;

    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `call create_new_user('${newUser.username}', '${newUser.email}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}');`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();
                    if (err) {
                        return reject(err);
                    }

                    newUserId = _.get(results, '[0][0].newUserId');
                    if (newUserId === 0) {
                        return reject({
                            message: 'User Already Exits',
                            statusCode: 400
                        });
                    }

                    return resolve(results || []);
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
