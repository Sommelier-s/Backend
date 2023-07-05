// Third Party Dependencies.
const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors");

// Local Dependencies.
const routes = require("./settings/routes/index");

// Server Initialization.
const app = express();

// Json.
app.use(express.json());

// Morgan.
app.use(morgan("dev"));

const desarrolloApp = "http://localhost:3000";
const produccionApp = "backend-production-22db.up.railway.app"

// Cors.
app.use(
  cors({ origin: "*" })
);

// Router.
app.use("/", routes);

module.exports = app;
