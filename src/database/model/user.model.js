// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../index");

// Users Model.
const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(),
        },
        last_name: {
            type: DataTypes.STRING(),
        },
        id_picture: {
            type: DataTypes.STRING(),
            defaultValue: "usersPictures/vjnwieyjnhslptbgtwcs"
        },
        profile_picture: {
            type: DataTypes.STRING,
            defaultValue: "http://res.cloudinary.com/dzuenswtl/image/upload/v1687875782/usersPictures/vjnwieyjnhslptbgtwcs.png",
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(),
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        date_birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        is_Admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createGoogle: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        accountConfirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        googleId: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        // No pluralization.
        freezeTableName: true,
    }
);

module.exports = User;
