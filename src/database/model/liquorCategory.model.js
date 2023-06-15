// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Liquor Category Model.
const Liquor_category = sequelize.define(
  "liquor_category",
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

module.exports = Liquor_category;
