const User = require("../../../../database/model/user.model");

//get Users 
const getAllUser = async (req, res) => {
    const { id } = req.query;
    try {
        const users = await User.findAll()

        if (!users || users.length === 0) {

            return res.status(404).json({ status: 404, error: 'No hay usuarios' })
        }
        const usersAll = users.filter((user) => user.id != id);
        return res.status(200).json({ satatus: 200, message: "Estos son todos los usuarios", data: usersAll });
    } catch (error) {

        return res.status(500).json({ status: 500, error: error.message })
    }
}

module.exports = getAllUser;