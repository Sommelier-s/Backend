const User = require("../../../../database/model/user.model");

// Enponit token check
const comprobarToken = async (req, res) => {
    /// We receive the token that comes from params
    const { token } = req.params;
    // We look for the token in the database
    const usuarioConfirmar = await User.findOne({ where: { token } })
    // We validate that it is not used
    if (!usuarioConfirmar) {
        const error = new Error('Token no valido')
        return res.status(403).json({ status: 403, error: error.message })
    }
    res.status(200).json({ status: 200, message: 'Token valido' })
}


module.exports = comprobarToken