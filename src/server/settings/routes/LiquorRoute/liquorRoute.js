const { Router } = require("express");
const deleteLiquor = require("../../controllers/liquor/deleteLiquor.controller.js");
const getAllLiquor = require("../../controllers/liquor/getAllLiquor.controller.js");
const getLiquorById = require("../../controllers/liquor/getLiquorById.controller.js");
const getLiquorByName = require("../../controllers/liquor/getLiquorByName.controller.js");
const postLiquor = require("../../controllers/liquor/postLiquor.controller.js");
const putLiquor = require("../../controllers/liquor/putLiquor.controller.js");
const addCategoryToLiquor = require("../../controllers/liquor/addCategoryToLiquor.controller.js");

const router = Router();


router.post("/", postLiquor);
router.get("/", getAllLiquor);
router.get("/:id", getLiquorById);
router.get("/name", getLiquorByName);
router.put("/:id", putLiquor);
router.delete("/:id", deleteLiquor);

module.exports = router;