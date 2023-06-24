const User = require("../../../../database/model/user.model");

//get UserById

const getUserById = async(req, res) => {    
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id },
            attributes:['id','first_name','last_name','profile_picture', 'email', 'date_birth']
        });
        if(!user){
            return res.status(404).json({ msg: 'user not found' })
        }
        return res.json(user);
    } catch (error) {
        return res.status(403).json({ msg: error.message })
    }
}


module.exports = getUserById;