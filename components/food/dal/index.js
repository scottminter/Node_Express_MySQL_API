let foodDAL = {};

foodDAL.getAllFood = require('./getAllFoodDAL');
foodDAL.getFoodById = require('./getFoodByIdDAL');
foodDAL.getFoodByName = require('./getFoodByNameDAL');

module.exports = foodDAL;
