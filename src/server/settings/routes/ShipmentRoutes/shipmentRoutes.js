const { Router } = require('express');
const getShipmentByid = require('../../controllers/Shipment/getShipmentById.controller');
const getPendingShipment = require('../../controllers/Shipment/getPendingShipment.controller');
const getRealizedShipment = require('../../controllers/Shipment/getRealizedShipment.controller');
const postShipment = require('../../controllers/Shipment/postShipment.controller');
const putShipment = require('../../controllers/Shipment/putShipment.controller');

const router = Router();

router.get('/pending', getPendingShipment)
router.get('/realized', getRealizedShipment)
router.get('/:id', getShipmentByid)
router.post('/', postShipment)
router.put('/:id', putShipment)

module.exports = router;