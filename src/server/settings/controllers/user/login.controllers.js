const bcrypt = require("bcrypt");
const User = require("../../../../database/model/user.model");
const { generarJWT } = require("../../helper/user/generarJWT");



// Enpoint for user login
const login = async (req, res) => {
    try {
        // We take the data that comes by body
        const { email, password } = req.body;
        // We look for the user by email
        const user = await User.findOne({ where: { email: email } });
        // We verify that it does not exist
        if (!user) return res.status(404).json({ status: 404, error: "El usuario no existe" })
        // We compare the database password with the one the user sends us
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(404).json({ status: 404, error: "Contraseña incorrecta" })
        // We confirm that they are correct
        if (!user.accountConfirmed) {
            const error = new Error('Tu usuario no ha sido confirmado')
            return res.status(403).json({ status: 404, error: error.message })
        }
        // We show the data of the authenticated user
        res.status(200).json({
            status: 200, message: "Usuario permitido"
            , data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                date_birth: user.date_birth,
                email: user.email,
                token: generarJWT(user.id),
                profile_picture: user.profile_picture,
                isAdmin: user.is_Admin,
                isActive: user.isActive,
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = login;