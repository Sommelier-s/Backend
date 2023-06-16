const { Router } = require('express');
const deleteWineCategory = require('../../controllers/categoryWine/deleteWineCategory.controller')
const getWineCategories = require('../../controllers/categoryWine/getWineCategories.controller')
const postWineCategories = require('../../controllers/categoryWine/postWineCategory.controller')

const router = Router();

router.post('/', postWineCategories );
router.get('/', getWineCategories );
router.delete('/:id', deleteWineCategory );

module.exports = router;