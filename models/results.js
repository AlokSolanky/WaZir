const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Result = sequelize.define("results", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  buy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sell: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  volume: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  base_unit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Result;
