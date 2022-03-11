const Router = require('express').Router();
const Controller = require('./index.js');
const { validToken } = require('../../user/controllers/middleware');

Router.post('/create', Controller.create);
Router.get('/all', validToken, Controller.getAll);


module.exports = Router