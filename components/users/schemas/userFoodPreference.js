const Joi = require('joi');

module.exports = Joi.object().keys({
    foodId: Joi.number().required(),
    foodName: Joi.string().required()
});
