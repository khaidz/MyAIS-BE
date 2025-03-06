const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisLog = sequelize.define(
  "AisLog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    msgId: {
      type: DataTypes.INTEGER,
    },
    bsTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    msg: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 500,
    }
  },
  {
    tableName: "ais_log",
    timestamps: false,
  }
);

module.exports = AisLog;
