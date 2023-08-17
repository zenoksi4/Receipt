const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductInReceipt = sequelize.define('ProductInReceipt', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true, 
});

module.exports = ProductInReceipt;