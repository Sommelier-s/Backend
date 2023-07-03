const User = require("../../../../database/model/user.model");

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


// update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, profile_picture, id_picture, email, date_birth } = req.body;
    try {

        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ status: 404, error: 'User not found' })
        }

        if (id_picture && id_picture !== "usersPictures/vjnwieyjnhslptbgtwcs") {
            console.log("entro a eliminar la imagen")
            await cloudinary.uploader.destroy(user.id_picture);
        }

        
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.date_birth = date_birth || user.date_birth;
        user.profile_picture = profile_picture || user.profile_picture;
        user.id_picture = id_picture || user.id_picture;
        user.email = email || user.email;
        await user.save();
        res.status(200).json({ status: 200, message: "Updated successfully" })

    } catch (error) {
        return res.status(500).json({ status: 500, error })
    }


}

module.exports = updateUser;