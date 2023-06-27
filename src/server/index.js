// Third Party Dependencies.
const express = require("express"),
    morgan = require("morgan"),
    cors = require("cors")
const session = require('express-session');
const passport = require("passport");
require("./settings/middleware/passport")

// Local Dependencies.
const routes = require("./settings/routes/index");


// Server Initialization.
const app = express();

// Middlewares.
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
app.use(passport.session());

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