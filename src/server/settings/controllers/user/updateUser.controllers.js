const User = require("../../../../database/model/user.model");
const { sendBannedEmail, sendUnbanEmail, sendEmailForJobPromotionEmail, sendUnsubscribeEmail } = require("../../helper/user/email");

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
    const { name, profile_picture, id_picture, email, isActive, is_Admin, date_birth } = req.body;

    try {

        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ status: 404, error: 'Usuario no encontrado' })
        }

        if (id_picture && id_picture !== "usersPictures/vjnwieyjnhslptbgtwcs") {
            try {
                await cloudinary.uploader.destroy(user.id_picture);
            } catch (error) {
                console.log(error);
            }
        }

        if (is_Admin != undefined) {
            if (is_Admin) {
                await sendEmailForJobPromotionEmail({ email, name });
                return await user.update({
                    profile_picture,
                    id_picture,
                    isActive,
                    is_Admin
                })
            } else {
                await sendUnsubscribeEmail({ email, name });
                return await user.update({
                    profile_picture,
                    id_picture,
                    isActive,
                    is_Admin
                })
            }
        }


        if (isActive != undefined) {
            console.log("entro al if")
            if (isActive) {
                await sendUnbanEmail({ email, name });

                return await user.update({
                    profile_picture,
                    id_picture,
                    isActive,
                    is_Admin
                })

            } else {

                await sendBannedEmail({ email, name });
                return await user.update({
                    profile_picture,
                    id_picture,
                    isActive,
                    is_Admin
                })
            }
        }

        await user.update({
            profile_picture,
            id_picture,
            isActive,
            is_Admin
        })

        res.status(200).json({ status: 200, message: "Usuario actualizado correctamente" })

    } catch (error) {
        return res.status(500).json({ status: 500, error })
    }


}

module.exports = updateUser;