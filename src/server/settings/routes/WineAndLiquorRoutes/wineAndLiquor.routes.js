const { Router } = require("express");

const getById = require("../../controllers/WineAndLiquorRoutes/getById.controller");
const getByName = require("../../controllers/WineAndLiquorRoutes/getByName.controller");
const getAllRatingsByUser = require("../../controllers/WineAndLiquorRoutes/getAllRatingsByUser.controller")


const router = Router();


router.get("/", getById);
router.get("/userRatings", getAllRatingsByUser)
router.get("/name", getByName);

module.exports = router;