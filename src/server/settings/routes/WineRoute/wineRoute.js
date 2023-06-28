const { Router } = require('express');
const getWine = require('../../controllers/wine/getWine.controller');
const getActiveWine = require('../../controllers/wine/getActiveWines.controller');
const getWineById = require('../../controllers/wine/getWineById.controller');
const getWineByName = require('../../controllers/wine/getWineByName.controller');
const postWine = require('../../controllers/wine/postWine.controller');
const deleteWine = require('../../controllers/wine/deleteWine.controller');
const putWine = require('../../controllers/wine/putWine.controller');
const putWineStock = require('../../controllers/wine/putWineStoc.controller');
const deletePermanentlyWine = require('../../controllers/wine/deletePermanentlyWine.controller');

const router = Router();

router.post('/', postWine);
router.get('/', getWine);
router.get('/search', getWineByName);
router.get('/active', getActiveWine);
router.put('/stock/:id', putWineStock);
router.get('/:id', getWineById);
router.put('/:id', putWine);
router.delete('/:id', deleteWine);
router.delete('/permanently/:id', deletePermanentlyWine);

module.exports = router;