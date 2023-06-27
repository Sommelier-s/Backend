const { Comments, Wine, Liquor, User } = require('../../../../database/model/relationships');

//Function that validates all the fields of body
function validateFields({ user_id, productId, comment }) {
    if (!comment || comment === "") return false;
    if (!productId || productId === "" || !esUUID(productId)) return false;
    if (!user_id || user_id === "" || !esUUID(user_id)) return false;
    return true;
}

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const postComments = async (req, res) => {
    const { comment, user_id, productId } = req.body;

    try {
        //Valid fields of body
        if(!validateFields(req.body)) return res.status(409).json({ status: 409, message: 'Fields are not valid'});
        
        //Valid if the product exist
        const liquor = await Liquor.findByPk(productId);
        const wine = await Wine.findByPk(productId);
        if (!liquor && !wine) return res.status(404).json({ status: 404, message: 'Product not found' });

        //Valid if the user is registered
        const client = await User.findByPk(user_id);
        if (!client) return res.status(404).json({ status: 404, message: 'The clinet is not registered' });
        
        //Fullname
        const Fullname = client.first_name.concat(' ', client.last_name);
        
        //I post the comment
        const post = await Comments.create({
            product_id: productId,
            client_name: Fullname,
            comment,
            user_id
        })

        //Send the response
        return res.status(200).json({ status: 200, message: 'Comment found', data: post });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
};

module.exports = postComments;