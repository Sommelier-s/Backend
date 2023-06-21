const { Router } = require('express');
const getSales = require('../../controllers/sales/getSales.controller');
const getSalesByMonth = require('../../controllers/sales/getSalesByMonth.controller');
const postSales = require('../../controllers/sales/postSales.controller');

const router = Router();

router.post('/', postSales );
router.get('/', getSales );
router.get('/:month', getSalesByMonth );

module.exports = router;