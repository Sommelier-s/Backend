require("dotenv").config();
const { APY_KEY_CLOUDINARY, NAME_CLOUDINARY } = process.env;

const getData = (req, res) => {

    try {
        res.status(200).json({ status: 200, message: "Datos de Cloudinary", data: { apy_key: APY_KEY_CLOUDINARY, name_cloud: NAME_CLOUDINARY } });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }

}

module.exports = getData;