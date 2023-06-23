// I bring the models
const { Purchased_products, User } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
};



const postPurchasedProducts = async (req, res) => {
    
 

    //Purchased Products data
    const { clientId, productId } = req.body;

    try {    
        if (!esUUID(clientId)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        if (!esUUID(productId)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
    
        //I search the client name  
        const userID = await User.findByPk(clientId);
        if(!userID) return res.status(404).json({ status:404, message: "User not found"});
        
        
        

        //I create the sale
        const purchasedProducts = await Purchased_products.create({
            client_id: clientId,
            product_id: productId,
        });
        
        //I return the product data created
        res.status(201).json({ status: 201, message: "The purchased was successfully saved", data: purchasedProducts });
        
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = postPurchasedProducts;