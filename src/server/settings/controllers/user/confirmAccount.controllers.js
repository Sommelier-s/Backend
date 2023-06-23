const User = require("../../../../database/model/user.model");


// Endpoint Account Information  
const confirmar = async (req, res) => {
    // Get the token that comes from params
    const { token } = req.params;
    // We look for the token in the database
    const usuarioConfirmar = await User.findOne({ where: { token } })
    // We validate that it is not used
    if (!usuarioConfirmar) {
        const error = new Error('invalid token')
        return res.status(403).json({ msg: error.message })
    }
    
    try {
        // We confirm the account
        usuarioConfirmar.accountConfirmed = true;
        //We remove the token that was already used
        usuarioConfirmar.token = ""
        // We save the user's changes
        await usuarioConfirmar.save();
        res.status(200).send({ message: 'confirmed user' })
    } catch (error) {
        return res.status(403).json({ msg: error.message })
    }
}

module.exports = confirmar;