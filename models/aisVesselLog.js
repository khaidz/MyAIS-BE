const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisVesselLog = sequelize.define(
  "AisVesselLog",
  {
    id: {
      type: DataTypes.STRING,
      length: 9,
      primaryKey: true,
    },
    mmsi: {
      type: DataTypes.STRING,
      length: 5,
    },
    lng: {
      type: DataTypes.FLOAT,
    },
    lat: {
      type: DataTypes.FLOAT,
    },
    sog: {
      type: DataTypes.STRING,
      length: 5,
    },
    cog: {
      type: DataTypes.STRING,
      length: 5,
    },
    rot: {
      type: DataTypes.STRING,
      length: 5,
    },
    hdg: {
      type: DataTypes.STRING,
      length: 5,
    },
    utcPos: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "ais_log",
    timestamps: false,
  }
);

module.exports = AisVesselLog;
