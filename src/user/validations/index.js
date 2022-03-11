const Joi = require('joi');

module.exports.Username = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
});

module.exports.New = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    lastname: Joi.string().trim().required(),
});

module.exports.UpdateUser = Joi.object({
    id: Joi.string().trim().required(),
    username: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    lastname: Joi.string().trim().required(),
});