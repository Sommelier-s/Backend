const { Router } = require('express');
const getWine = require('../../controllers/wine/getWine.controller')
const getActiveWine = require('../../controllers/wine/getActiveWines.controller')
const getWineById = require('../../controllers/wine/getWineById.controller')
const getWineByName = require('../../controllers/wine/getWineByName.controller')
const postWine = require('../../controllers/wine/postWine.controller')
const deleteWine = require('../../controllers/wine/deleteWine.controller')
const putWine = require('../../controllers/wine/putWine.controller')

const router = Router();

router.post('/', postWine );
router.get('/', getWine );
router.get('/active', getActiveWine );
router.get('/:id', getWineById );
router.get('/name', getWineByName );
router.put('/:id', putWine );
router.delete('/:id', deleteWine );

module.exports = router;