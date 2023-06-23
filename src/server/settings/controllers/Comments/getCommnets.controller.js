const { Comments } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getComments = async (req, res) => {
    const { productId } = req.params;

    try {
        //Valid if the id is correct
        if (productId === "") return res.status(400).json({ status: 400, error: "The product id field is empty" });
        if (!esUUID(productId)) return res.status(409).json({ status: 409, error: "The product id field has no UUID structure" });
    
        const comment = await Comments.findAll({
            where: {
                product_id: productId
            }
        });
        
        if(!comment) return res.status(404).json({ status:404, message: 'There is not comments for the product'});
        return res.status(200).json({ status: 200, message: 'Comment found', comment: comment});
        
    } catch (error) {
        return res.status(500).json({ status:500, message: error.message});
    }
};

module.exports = getComments;