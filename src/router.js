const Router = require('express').Router();

Router.use('/user', require('./user/controllers/router.js'));
Router.use('/publication', require('./publication/controllers/router.js'));

module.exports = Router