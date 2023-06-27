const { Router } = require("express");
const deleteLiquor = require("../../controllers/liquor/deleteLiquor.controller.js");
const getAllLiquor = require("../../controllers/liquor/getAllLiquor.controller.js");
const getLiquorById = require("../../controllers/liquor/getLiquorById.controller.js");
const getLiquorByName = require("../../controllers/liquor/getLiquorByName.controller.js");
const postLiquor = require("../../controllers/liquor/postLiquor.controller.js");
const putLiquor = require("../../controllers/liquor/putLiquor.controller.js");
const deletePermanentlyLiquor = require('../../controllers/liquor/deletePermanentlyLiquor.controller');

const router = Router();

router.post("/", postLiquor);
router.get("/", getAllLiquor);
router.get("/:id", getLiquorById);
router.get("/name", getLiquorByName);
router.put("/:id", putLiquor);
router.delete("/:id", deleteLiquor);
router.delete('/permanently/:id', deletePermanentlyLiquor);

module.exports = router;