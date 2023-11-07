const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('Expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  }
}, {
  tableName: 'expense',
});

module.exports = User;
