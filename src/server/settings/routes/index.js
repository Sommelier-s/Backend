// Objective: Define the routes of the application.

// Third Party Dependencies.
const { Router } = require("express");

// Router Instance.
const routes = Router();

routes.use("/wine",  require('./WineRoute/wineRoute'));
routes.use("/auth", require("./UserRoute/userRoute"));
routes.use("/category_wine", require("./CategoriesRoutes/wineCategoryRoutes"));
routes.use("/category_liquor", require("./CategoriesRoutes/liquorCategoryRoutes"));



module.exports = routes;
