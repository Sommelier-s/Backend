const { Router } = require('express');
const getComments = require('../../controllers/Comments/getCommnets.controller')
const postComments = require('../../controllers/Comments/postComments.controller')
const putCommnets = require('../../controllers/Comments/putComments.controller')
const deleteComments = require('../../controllers/Comments/deleteComments.controller')

const router = Router();

router.post('/', postComments );
router.get('/:productId', getComments );
router.put('/:id', putCommnets );
router.delete('/:id', deleteComments );

module.exports = router;