let foodDAL = {};

foodDAL.getAllFood = require('./getAllFoodDAL');
foodDAL.getFoodById = require('./getFoodByIdDAL');
foodDAL.getFoodByName = require('./getFoodByNameDAL');
foodDAL.createNewFood = require('./createNewFoodDAL');

module.exports = foodDAL;
