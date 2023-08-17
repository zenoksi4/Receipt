const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Receipt = sequelize.define('Receipt', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

Receipt.addHook('beforeCreate', async (receipt) => {
  const lastReceipt = await Receipt.findOne({
    order: [['number', 'DESC']],
  });

  const nextNumber = lastReceipt ? lastReceipt.number + 1 : 1;
  receipt.number = nextNumber;
});

module.exports = Receipt;