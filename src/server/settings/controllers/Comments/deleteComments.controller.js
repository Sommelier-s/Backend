const { Comments, User } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}


const deleteComments = async (req, res) => {
    
    //Comment id
    const { id } = req.params;
    //User id
    const { userId } = req.query

    try {
        //Valid if the id is correct
        if(!id || id === '' || !esUUID(id)) return res.status(409).json({ status: 409, message: 'Invalid ID'});
        //Valid if the user make the comment     
        const user = await User.findByPk(userId);
        console.log(user);   
        //Valid if the user makes the comment or if he is an administrator
        //I search the comment
        const response = await Comments.findByPk(id);
        if(!user.is_Admin && response.user_id !== userId) return res.status(401).json({ status: 401, message: 'Unauthorized user'}); 
        //Valid response
        if(!response) return res.status(404).json( {status: 404, message: 'Comment not found'});
        //Delete the comment
        const deletedComment = await Comments.destroy({
            where: {
                id
            }
        });
        //Send response
        return res.status(200).json({ status:200, message: 'Comment was deleted correctly', commment: deletedComment});

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message});
    }
};

module.exports = deleteComments;