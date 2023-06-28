// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Users Model.
const Liquor = sequelize.define(
    "liquor",
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
            defaultValue: "https://thumbs.dreamstime.com/b/silueta-de-licor-botella-alcohol-celebraci%C3%B3n-blanco-negro-elemento-decoraci%C3%B3n-dise%C3%B1o-men%C3%BA-barra-logotipo-s%C3%ADmbolo-fondo-173870498.jpg",
            allowNull: true,
        },
        id_picture: {
            type: DataTypes.STRING(),
        },
        is_product_month: {
            type: DataTypes.BOOLEAN(),
            defaultValue: false,
        },
        graduation: {
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

module.exports = Liquor;