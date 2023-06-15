// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Liquor Category Model.
const LiquorCategory = sequelize.define(
  "liquorCategory",
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

module.exports = LiquorCategory;
