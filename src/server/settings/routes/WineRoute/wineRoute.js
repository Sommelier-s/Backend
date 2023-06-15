const { Router } = require('express');
const getWine = require('../../controllers/wine/getWine.controller')
const getWineById = require('../../controllers/wine/getWineById.controller')
const getWineByName = require('../../controllers/wine/getWineByName')
const postWine = require('../../controllers/wine/postWine.controller')
const deleteWine = require('../../controllers/wine/deleteWine.controller')
const putWine = require('../../controllers/wine/putWine.controller')

const router = Router();

router.post('/get', postWine );
router.get('/get', getWine );
router.get('/get/:id', getWineById );
router.get('/get', getWineByName );
router.put('/get', putWine );
router.delete('/get', deleteWine );