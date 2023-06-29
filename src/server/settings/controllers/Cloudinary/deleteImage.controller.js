require("dotenv").config();
const { APY_KEY_CLOUDINARY,
    NAME_CLOUDINARY,
    SECRET_KEY_CLOUDINARY } = process.env;

const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: NAME_CLOUDINARY,
    api_key: APY_KEY_CLOUDINARY,
    api_secret: SECRET_KEY_CLOUDINARY
});

const deleteImage = async (req, res) => {

    const { id_public } = req.query;
    try {

        await cloudinary.uploader.destroy(id_public);

        res.status(200).json({ status: 200, message: "Imagen eliminada con exito" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = deleteImage;