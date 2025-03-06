const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisVessel = sequelize.define(
  "AisVessel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mmsi: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 9,
    },
    vsnm: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30,
    },
    lng: {
      type: DataTypes.FLOAT,
    },
    lat: {
      type: DataTypes.FLOAT,
    },
    xAsix: {
      type: DataTypes.INTEGER,
    },
    yAsix: {
      type: DataTypes.INTEGER,
    },
    sog: {
      type: DataTypes.STRING,

      length: 5,
    },
    cog: {
      type: DataTypes.STRING,

      length: 5,
    },
    utcPos: {
      type: DataTypes.DATE,
    },
    utcTm: {
      type: DataTypes.DATE,
    },
    bsId: {
      type: DataTypes.STRING,
      length: 5,
    },
  },
  {
    tableName: "ais_vessel",
    timestamps: false,
  }
);

module.exports = AisVessel;
