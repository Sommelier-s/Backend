// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Users Model.
const Wine = sequelize.define(
    "wine",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(),
        },
        description: {
            type: DataTypes.TEXT,   
        },
        price: {
            type: DataTypes.FLOAT(),
        },
        picture: {
            type: DataTypes.STRING,
            defaultValue: "https://previews.123rf.com/images/naddya/naddya1307/naddya130700039/20960698-negro-silueta-de-la-botella-de-vino-de-vidrio-y-la-ilustraci%C3%B3n-vectorial.jpg",
            allowNull: true,
        },
        variety: {
            type: DataTypes.STRING(),
        },
        stock: {
            type: DataTypes.INTEGER(),
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    },
    {
        // No pluralization.
        freezeTableName: true,
    }
);

module.exports = Wine;
