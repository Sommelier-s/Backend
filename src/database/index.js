require("dotenv").config();
const { Sequelize } = require("sequelize");

// Environment Variables.
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT, DB_PORT } =
    process.env;



// Database Local Connection.
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false,
});

module.exports = sequelize;
