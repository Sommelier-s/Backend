const { Router } = require('express');
const { deleteWineCategory, getWineCategories, postWineCategories } = require('../../controllers/relationship')
const router = Router();

router.post('/', postWineCategories );
router.get('/', getWineCategories );
router.delete('/:id', deleteWineCategory );

module.exports = router;