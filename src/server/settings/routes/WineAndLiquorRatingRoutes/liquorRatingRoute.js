const { Router } = require('express');
const getBestLiquors = require("../../controllers/ratingLiquor/getBestLiquors.controller");
const getLiquorRating = require("../../controllers/ratingLiquor/getLiquorRating.controller");
const getLiquorRatingAverage = require("../../controllers/ratingLiquor/getLiquorRatingAverage.controller");
const putLiquorRating = require("../../controllers/ratingLiquor/putLiquorRating.controller");
const postLiquorRating = require("../../controllers/ratingLiquor/postLiquorRating.controller");

const router = Router();

//?? Recibe productId por query
router.get("/promedio", getLiquorRatingAverage);
//?? Recibe quantity por query
router.get("/bestLiquors", getBestLiquors);
//?? Recibe id (user id) por query y productId por body
router.get("/", getLiquorRating);
//?? Recibe userId por query. Recibe productId y puntation por body 
router.post("/", postLiquorRating);
//?? Recibe id (user id) por query. Recibe productId y puntation por body 
router.put("/", putLiquorRating);

module.exports = router;