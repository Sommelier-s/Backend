// THird Party Dependencies.
const { DataTypes } = require('sequelize');

// Local Dependencies.
const sequelize = require('../index')

// Users Model.
const Sale = sequelize.define( 
    'sale',
    {
        saleId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY
        },
        client_name: {
            type: DataTypes.STRING()
        },
        product_name: {
            type: DataTypes.STRING()
        },
        quantity: {
            type: DataTypes.INTEGER()
        },
        amount: {
            type: DataTypes.FLOAT()
        }
    },
    {
        // No pluralization.
        freezeTableName: true,
    }

);

module.exports = Sale;
