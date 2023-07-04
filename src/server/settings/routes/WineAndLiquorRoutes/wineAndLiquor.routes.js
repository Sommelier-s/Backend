const { Router } = require("express");

const getById = require("../../controllers/WineAndLiquorRoutes/getById.controller");
const getByName = require("../../controllers/WineAndLiquorRoutes/getByName.controller");
const getAllRatingsByUser = require("../../controllers/WineAndLiquorRoutes/getAllRatingsByUser.controller")
const getProductMounth = require("../../controllers/WineAndLiquorRoutes/getProductMounth.controller");

const router = Router();


router.get("/", getById);
router.get("/userRatings", getAllRatingsByUser)
router.get("/name", getByName);
router.get("/product_month", getProductMounth)

module.exports = router;