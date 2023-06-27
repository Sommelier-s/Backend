const bcrypt = require("bcrypt");
const User = require("../../../../database/model/user.model");

//put new password
const nuevoPassword = async (req, res) => {
    // We receive the token that comes by and new password by token
    const { token } = req.params;
    const { password } = req.body;
    // We look for the token in the database
    const user = await User.findOne({ where: { token } })
    // We write the new password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // We pass the encrypted password so that the new one is replaced by the old password
    user.password = hashedPassword;
    // We delete the token
    user.token = "";
    try {
        // We save the user's changes
        await user.save();
        res.status(200).json({ status: 200, message: 'Password changed successfully' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = nuevoPassword