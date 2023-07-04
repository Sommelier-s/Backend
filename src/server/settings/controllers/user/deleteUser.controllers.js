const User = require("../../../../database/model/user.model");

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ status: 404, error: 'Usuario no encontrado' })
        }
        user.isActive = false
        await user.save();
        return res.status(200).json({ status: 200, message: 'Registro eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ status: 500, error: error.message })
    }
}


module.exports = deleteUser;