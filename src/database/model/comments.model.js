//Third Party Dependecies
const { DataTypes } = require('sequelize');

//Local dependencies
const sequelize = require('../index');

//Comments model
const Comments = sequelize.define(
    'comment',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type:DataTypes.UUID
        },
        product_id: {
            type: DataTypes.UUID,
        },
        comment: {
            type: DataTypes.TEXT,
        },
        client_name: {
            type: DataTypes.STRING()
        } 
    },
    {
        //No pluralization.
        freezeTableName: true
    }
);

module.exports = Comments;