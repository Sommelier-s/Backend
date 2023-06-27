require("dotenv").config();
const { Sequelize } = require("sequelize");

// Environment Variables.
const { DEBUG, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT, DB_PORT, DB_DEPLOY_RENDER } =
  process.env;

if (DEBUG === "true") {
  // Database Local Connection.
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false,
  });

  module.exports = sequelize;

} else {

  //Render deploy database
  const sequelize = new Sequelize(DB_DEPLOY_RENDER, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false,
    dialect: "postgres", // lets Sequelize know we can use pg-native for ~30% more speed
    dialectOptions: {
      ssl: {
        require: true,
      },
    }
  });
  module.exports = sequelize;
}



