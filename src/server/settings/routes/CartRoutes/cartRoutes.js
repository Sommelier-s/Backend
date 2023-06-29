const { Router } = require('express');

const deleteCart = require('../../controllers/cart/deleteCart.controller');
const getCartByUserId = require('../../controllers/cart/getCartByUserId.controller');
const postCart = require("../../controllers/cart/createCart.controller");
const putCart = require("../../controllers/cart/putCart.controller");

const router = Router();

//recibe id (user id) por query
router.get('/', getCartByUserId);
//recibe id (user id) por query y por body recibe cart y amount
router.post('/', postCart);
//recibe id (user id) por query y por body recibe cart y amount
router.put('/', putCart);
//recibe id (cart id) por query
router.delete('/', deleteCart);

module.exports = router;