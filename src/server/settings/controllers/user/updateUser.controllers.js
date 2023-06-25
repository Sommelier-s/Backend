const User = require("../../../../database/model/user.model");

// update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, profile_picture, email, date_birth, is_Admin } = req.body;
    try {

        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ status: 404, error: 'User not found' })
        }

        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.date_birth = date_birth || user.date_birth;
        user.profile_picture = profile_picture || user.profile_picture;
        user.email = email || user.email;
        user.is_Admin = is_Admin //! Cambia el rol de user a admin
        await user.save();
        res.status(200).json({ status: 200, message: "Updated successfully" })

    } catch (error) {
        return res.status(500).json({ status: 500, error: error.message })
    }


}

module.exports = updateUser;