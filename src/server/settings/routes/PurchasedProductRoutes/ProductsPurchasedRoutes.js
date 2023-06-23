const { Router } = require('express');
const { postPurchasedProducts, getPurchasedProductsById} = require('../../controllers/relationship')

const router = Router();

router.post('/', postPurchasedProducts );
router.get('/:client_id', getPurchasedProductsById );

module.exports = router;