// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");


// Liquor Category Model.
const LiquorCategory = sequelize.define(
    "liquorCategory",
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


module.exports = LiquorCategory;


