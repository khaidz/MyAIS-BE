const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisData = sequelize.define(
  "AisData",
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
    },
    hashCode: {
      type: DataTypes.STRING,
      allowNull: true,
      length: 200,
    },
    stt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "ais_data",
    timestamps: false,
  }
);

module.exports = AisData;
