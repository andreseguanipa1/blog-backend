const { DataTypes, Model } = require('sequelize');
const db = require('../../database/domain');

class Publication extends Model {}
Publication.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(5000),
    allowNull: false
  }

}, {sequelize: db, modelName: 'publication'});

module.exports = Publication;