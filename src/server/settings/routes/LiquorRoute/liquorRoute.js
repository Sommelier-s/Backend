const { Router } = require("express");
const deleteLiquor = require("../../controllers/liquor/deleteLiquor.controller.js");
const getAllLiquor = require("../../controllers/liquor/getAllLiquor.controller.js");
const getLiquorById = require("../../controllers/liquor/getLiquorById.controller.js");
const getLiquorByName = require("../../controllers/liquor/getLiquorByName.controller.js");
const postLiquor = require("../../controllers/liquor/postLiquor.controller.js");
const putLiquor = require("../../controllers/liquor/putLiquor.controller.js");
const addCategoryToLiquor = require("../../controllers/liquor/addCategoryToLiquor.controller.js");

const router = Router();

//** This route recives a name from req.query (?name=string)
router.get("/name", getLiquorByName);

//** This route recives an id from req.params
router.get("/:id", getLiquorById);

//** This route send all products in the liquor DB when is requested
router.get("/", getAllLiquor);

//** This route recives an id from req.params and { name, description, price, stock, picture, variety } from req.body
router.post("/:id", postLiquor);

//** This route recives an id from req.params and a userId from req.query
router.delete("/:id", deleteLiquor);

//** This route recives an id from req.params, an userId from req.query and data from req.body
router.put("/:id", putLiquor)

//** this route recives an liquorId from req.params, an userId and categoryId from req.query
router.put("/addCategory/:id", addCategoryToLiquor)

module.exports = router;