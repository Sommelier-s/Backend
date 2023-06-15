// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");


// Wine Category Model.
const WineCategory = sequelize.define(
    "wineCategory",
      {  
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull:false
        }
      },
      {
        timestamps: false,
      }
)


module.exports = WineCategory;