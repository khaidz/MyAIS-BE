const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myais", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
