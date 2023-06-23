const User = require("../../../../database/model/user.model");

// update user
const updateUser = async(req, res) => { 
    const {id} = req.params;
    const {first_name, last_name, user_name, date_birth} = req.body;
    try {

        const user_nameExists = await User.findOne({ where: {user_name}})
        if(user_nameExists) {
            return res.status(400).json({ msg: 'username is already used' })
        }

        const user = await User.findByPk(id)
        if(!user){
            return res.status(404).json({ msg: 'User not found' })
        }

        user.first_name = first_name;
        user.last_name = last_name;
        user.user_name = user_name;
        user.date_birth = date_birth;
        await user.save();
        res.status(200).json({message: "Updated successfully"})

    } catch (error) {
        return res.status(403).json({ msg: error.message })    
    }


}

module.exports = updateUser;