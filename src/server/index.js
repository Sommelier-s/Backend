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

// Cors.
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Router.
app.use("/", routes);

module.exports = app;
