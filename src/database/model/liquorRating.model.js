// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Wine rating Model.
const Liquor_rating = sequelize.define(
  "liquor_rating",
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    puntuation: {
        type: DataTypes.INTEGER(),
    },
    user_id: {
      type: DataTypes.STRING(),
    },
    liquor_id: {
      type: DataTypes.STRING(),
    },
    comment: {
      type: DataTypes.TEXT,
    }
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Liquor_rating;