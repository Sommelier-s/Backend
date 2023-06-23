const { Comments, User } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const putComments = async (req, res) => {
    
    //Comment id
    const { id } = req.params;

    const { comment, userId } = req.body;

    try {
        //Valid id the user id is correct
        if (!userId || userId === '' || !esUUID(userId)) return res.status(409).json({ status: 409, message: 'User id invalid' });
        //Valid if the comment comes from body
        if (!comment || comment === '') return res.status(409).json({ status: 409, message: 'Comment required'});
        //Valid if the user exist
        const user = await User.findByPk(userId);
        if(!user) return res.status(404).json({ status: 404, message: 'User not found'});
        //I search the comment
        const response = await Comments.findByPk(id);
        //valid response
        if (!response) return res.status(404).json({ status: 404, message: 'Comment not found' });

        if(response.user_id !== userId) return res.status(401).json({ status: 401, message: 'Unauthorized to update'});
        
        //Update the comment
        response.update({
            comment
        })
        //send the response
        return res.status(200).json({ status: 200, message: 'Comment updated correctly', data: response });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = putComments;