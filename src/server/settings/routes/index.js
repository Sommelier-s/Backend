// Objective: Define the routes of the application.

// Third Party Dependencies.
const { Router } = require("express");

// Router Instance.
const routes = Router();

routes.use("/sale",  require('./SaleRoutes/saleRoutes'));
routes.use("/wine",  require('./WineRoute/wineRoute'));
routes.use("/liquor", require('./LiquorRoute/liquorRoute'));
routes.use("/both_drinks", require('./WineAndLiquorRoutes/wineAndLiquor.routes'));
routes.use("/auth", require("./UserRoute/userRoute"));
routes.use("/category_wine", require("./CategoriesRoutes/wineCategoryRoutes"));
routes.use("/category_liquor", require("./CategoriesRoutes/liquorCategoryRoutes"));
routes.use("/payment", require("./Stripe/PaymentRoutes"));
routes.use("/purchased", require("./PurchasedProductRoutes/ProductsPurchasedRoutes"));



module.exports = routes;
