const User = require("../../../../database/model/user.model");

//get Users 
const getAllUser = async(req, res) => { 
    try {
        const users = await User.findAll({
            attributes:['id','first_name','last_name','profile_picture', 'email', 'date_birth', 'is_Admin']
        })
        if(!users){
            return res.status(404).json({ msg: 'No hay usuarios' })
        }
        return res.json(users);
    } catch (error) {
        return res.status(403).json({ msg: error.message })
    }
}


module.exports = getAllUser;