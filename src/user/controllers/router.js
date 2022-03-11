const Router = require('express').Router();
const Controller = require('./index.js');
const { validToken, checkToken } = require('./middleware');

Router.post('/login', Controller.login);
Router.post('/signup', validToken, Controller.signup);
Router.put('/updateUser', validToken, Controller.updateUser);
Router.put('/updatePassword', validToken, Controller.updatePassword);
Router.get('/', checkToken, Controller.comprobate);

module.exports = Router