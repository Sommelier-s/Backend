// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Wine rating Model.
const Wine_rating = sequelize.define(
  "wine_rating",
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    rating: {
        type: DataTypes.INTEGER(),
    },
    user_id: {
      type: DataTypes.STRING(),
    },
    wine_id: {
      type: DataTypes.STRING(),
    },
    comment: {
      type: DataTypes.TEXT
    }
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Wine_rating;