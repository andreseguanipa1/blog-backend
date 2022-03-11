const { Sequelize } = require('sequelize');

// Dirección de la DB.
module.exports = new Sequelize('blog', 'root', '', { host: 'localhost', dialect: 'mysql' });