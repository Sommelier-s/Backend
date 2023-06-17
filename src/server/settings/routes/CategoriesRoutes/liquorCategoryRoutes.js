const { Router } = require('express');
const { deleteLiquorCategory, getLiquorCategories, postLiquorCategories } = require('../../controllers/relationship')

const router = Router();

router.post('/', postLiquorCategories );
router.get('/', getLiquorCategories );
router.delete('/:id', deleteLiquorCategory );

module.exports = router;