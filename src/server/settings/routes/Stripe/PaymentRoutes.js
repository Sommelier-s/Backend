const { Router } = require('express');
const payment = require('../../controllers/Stripe/payment.controller')
const configPayment = require('../../controllers/Stripe/configPayment.controller')
const router = Router();

router.post('/', payment );
router.get('/config', configPayment );

module.exports = router;