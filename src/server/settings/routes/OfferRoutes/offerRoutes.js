const { Router } = require('express');
const getOffer = require('../../controllers/Offer/getOffer.controller');
const postOffer = require('../../controllers/Offer/postOffer.controller');
const putOffer = require('../../controllers/Offer/putOffer.controller');
const deleteOffer = require('../../controllers/Offer/deleteOffer.controller');
const getOfferById = require('../../controllers/Offer/getOfferById.controller');
const getOfferByName = require('../../controllers/Offer/getOfferByName.controller');

const router = Router();


router.post('/', postOffer);
router.get('/', getOffer);
router.get('/search', getOfferByName);
router.get('/:id', getOfferById);
router.put('/:id', putOffer);
router.delete('/:id', deleteOffer);

module.exports = router;