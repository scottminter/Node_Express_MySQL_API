const BProm = require('bluebird');
const DAL = require('./../dal');

module.exports = function mysqlHealthCheck () {
    return new BProm((resolve, reject) => {
        DAL.mysql()
            .then((resp) => {
                resolve({
                    message: resp
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
};
