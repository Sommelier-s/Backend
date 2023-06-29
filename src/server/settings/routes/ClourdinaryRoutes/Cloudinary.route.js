const { Router } = require('express');


const router = Router();
const getDataCloudinary = require("../../controllers/Cloudinary/getData.controller");
const deleImageCloudinary=require("../../controllers/Cloudinary/deleteImage.controller");

router.get('/data', getDataCloudinary );
router.delete("/delete",deleImageCloudinary);


module.exports = router;