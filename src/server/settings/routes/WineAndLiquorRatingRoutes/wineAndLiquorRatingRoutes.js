const { Router } = require('express');
const getRatingByProduct = require('../../controllers/wineAndLiquorRating/getRatingByProduct.controller');
const getRatingByUser = require('../../controllers/wineAndLiquorRating/getRatingByUser.controller');

const router = Router();

router.get('/product/:id', getRatingByProduct);
router.get('/user/:id', getRatingByUser); 

module.exports = router;