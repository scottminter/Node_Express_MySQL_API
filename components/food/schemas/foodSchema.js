const Joi = require('joi');

module.exports = Joi.object().keys({
    food: Joi.string().required(),
    taste: Joi.string().valid('sweet', 'savory').required()
});