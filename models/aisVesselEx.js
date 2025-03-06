const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AisVesselEx = sequelize.define(
  "AisVesselEx",
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
    mid: {
      type: DataTypes.STRING,
      length: 5,
    },
    callSign: {
      type: DataTypes.STRING,
      length: 6,
    },
    imo: {
      type: DataTypes.STRING,
      length: 6,
    },
    shipType: {
      type: DataTypes.STRING,
      length: 3,
    },
    dBown: {
      type: DataTypes.STRING,
      length: 5,
    },
    dStern: {
      type: DataTypes.STRING,
      length: 5,
    },
    dPort: {
      type: DataTypes.STRING,
      length: 5,
    },
    dSb: {
      type: DataTypes.STRING,
      length: 5,
    },
    eta: {
      type: DataTypes.STRING,
      length: 15,
    },
    des: {
      type: DataTypes.STRING,
      length: 30,
    },
    draft: {
      type: DataTypes.STRING,
      length: 4,
    },
    navStatus: {
      type: DataTypes.INTEGER,
    },
    rot: {
      type: DataTypes.STRING,
      length: 5,
    },
    hdg: {
      type: DataTypes.STRING,
      length: 5,
    },
    msg: {
      type: DataTypes.STRING,
      length: 2,
    },
  },
  {
    tableName: "ais_vessel_ex",
    timestamps: false,
  }
);

module.exports = AisVesselEx;
