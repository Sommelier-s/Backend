const User = require("../../../../database/model/user.model");
const { emailOlvidePassword } = require("../../helper/user/email");
const generarIdToken = require("../../helper/user/generarToken");


// Endpoint password recovery
const olvidePasswordUser = async (req, res) => {
    // user sends account email
    const { email } = req.body
    // We search the database for the email
    const user = await User.findOne({ where: { email } })
    // We validate that the email exists
    if (!user) {
        const error = new Error('Email no existe')
        return res.status(404).json({ status: 404, error: error.message })
    }

    try {
        // Let's generate a new token
        user.token = generarIdToken();
        // We save the user in the database
        await user.save();
        // Email sent with instructions for email recovery
        emailOlvidePassword(user)
        res.status(200).json({ status: 200, message: 'We have sent an email with the instructions' })
    } catch (error) {
        return res.status(403).json({ error: error.message })
    }
}

module.exports = olvidePasswordUser