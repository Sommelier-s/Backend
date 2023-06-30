// THird Party Dependencies.
const { DataTypes, DATE } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Wine rating Model.
const Shipment = sequelize.define(
  "shipment",
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
    },
    name: {
        type: DataTypes.STRING()
    },
    postal_code: {
        type: DataTypes.INTEGER()
    },
    province: {
        type: DataTypes.STRING()
    },
    city: {
        type: DataTypes.STRING()
    },
    address: {
        type: DataTypes.STRING()
    },
    number: {
        type: DataTypes.INTEGER()
    },
    apartment: {
        type: DataTypes.INTEGER(),
        defaultValue: 0
    },
    instructions: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.BIGINT()
    },
    pending: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Shipment;
