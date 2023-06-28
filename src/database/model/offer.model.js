const { DataTypes } = require('sequelize');

const  sequelize  = require('../index');

const Offer = sequelize.define(
    'offer',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.UUID,
            unique: true
        },
        product_name:{
            type: DataTypes.STRING(),
        },
        discount: {
            type: DataTypes.INTEGER()
        },
        price: {
            type: DataTypes.INTEGER()
        }
    }
);

module.exports = Offer;