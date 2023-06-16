const { Router } = require('express');
const deleteLiquorCategory = require('../../controllers/categoryLiquor/deleteLiquorCategory.controller')
const getLiquorCategories = require('../../controllers/categoryLiquor/getLiquorCategories.controller')
const postLiquorCategories = require('../../controllers/categoryLiquor/postLiquorCategory.controller')

const router = Router();

router.post('/', postLiquorCategories );
router.get('/', getLiquorCategories );
router.delete('/:id', deleteLiquorCategory );

module.exports = router;