// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Wine rating Model.
const Cart = sequelize.define(
  "cart",
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(),
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    amount: {
      type: DataTypes.FLOAT(),
    }
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Cart;