const { Router } = require('express');
const getCommentsByProduct = require('../../controllers/Comments/getCommnetsByProduct.controller');
const getCommentsByUser = require('../../controllers/Comments/getCommentByUser.controlle');

const router = Router();

router.get('/product/:productId', getCommentsByProduct );
router.get('/user/:userId', getCommentsByUser );

module.exports = router;