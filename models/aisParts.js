const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisParts = sequelize.define(
  "AisParts",
  {
    tableName: {
      type: DataTypes.STRING,
      length: 50,
    },
    frTm: {
      type: DataTypes.DATE,
    },
    toTm: {
      type: DataTypes.DATE,
    },
    fileName: {
      type: DataTypes.STRING,
      length: 200,
    },
    stt: {
      type: DataTypes.INTEGER,
    },
    ready: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "ais_parts",
    timestamps: false,
  }
);

module.exports = AisParts;
