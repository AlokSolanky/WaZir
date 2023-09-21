const Sequelize = require(`sequelize`);
const sequelize = new Sequelize("test", "root", "alok", {
  dialect: `mysql`,
  host: "localhost",
});
module.exports = sequelize;
