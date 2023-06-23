// THird Party Dependencies.
const { DataTypes } = require('sequelize');

// Local Dependencies.
const sequelize = require('../index')

// Users Model.
const Purchased_products = sequelize.define( 
    'purchased_products',
    {
        Id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        client_id: {
            type: DataTypes.STRING()
        },
        product_id: {
            type: DataTypes.STRING()
        }
    },
    {
        // No pluralization.
        freezeTableName: true,
    }

);

module.exports = Purchased_products;
