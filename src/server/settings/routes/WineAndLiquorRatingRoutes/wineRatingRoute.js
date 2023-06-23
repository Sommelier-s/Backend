const { Router } = require('express');
const getBestWines = require("../../controllers/ratingWine/getBestWines.controllers");
const getWineRating = require("../../controllers/ratingWine/getWineRating.controller");
const getWineRatingAverage = require("../../controllers/ratingWine/getWineRatingAverage.controller");
const putWineRating = require("../../controllers/ratingWine/putWineRating.controller");
const postWineRating = require("../../controllers/ratingWine/postWineRating.controller");

const router = Router();

//?? Recibe productId por query
router.get("/promedio", getWineRatingAverage);
//?? Recibe quantity por query
router.get("/bestWines", getBestWines);
//?? Recibe id (user id) por query y productId por body
router.get("/", getWineRating);
//?? Recibe userId por query. Recibe productId y puntation por body
router.post("/", postWineRating);
//?? Recibe id (user id) por query. Recibe productId y puntation por body
router.put("/", putWineRating);

module.exports = router;