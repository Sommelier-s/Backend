// Objective: Define the routes of the application.

// Third Party Dependencies.
const { Router } = require("express");
const wineRoute = require('./WineRoute/wineRoute')


// Router Instance.
const routes = Router();

routes.use("/wine", wineRoute);


module.exports = routes;
