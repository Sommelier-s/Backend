const User = require("../../../../database/model/user.model");

//get Users 
const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll()

            if (!users || users.length === 0) {

                return res.status(404).json({ status: 404, error: 'no users' })
            }
            return res.json(users);
    } catch (error) {

        return res.status(500).json({ status: 500, error: error.message })
    }
}

module.exports = getAllUser;