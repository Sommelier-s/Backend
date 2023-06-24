const { Router } = require('express');


const router = Router();
const getDataCloudinary = require("../../controllers/Cloudinary/getData.controller");


router.get('/data', getDataCloudinary );


module.exports = router;