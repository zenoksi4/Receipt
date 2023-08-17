const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Receipt = sequelize.define('Receipt', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Receipt;