const User = require('../../user/domain/model');
const Publication = require('../../publication/domain/model');

// Bill - Payments: One to Many
User.hasMany(Publication, { foreignKey: 'idUser' });
Publication.belongsTo(User, { foreignKey: 'idUser' });