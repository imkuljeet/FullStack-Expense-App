const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mypassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
