const Joi = require('joi');

module.exports.Content = Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().trim().required(),
    idUser: Joi.number().integer().required(),
});