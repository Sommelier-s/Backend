// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Wine Category Model.
const WineCategory = sequelize.define(
  "wineCategory",
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(),
        unique: true, // Agregar la restricción de unicidad
    }
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = WineCategory;
