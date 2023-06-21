// I bring the models
const { Sale, User, Wine, Liquor } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
};

//Function that validates all the fields of body
function validateFields({ clientId, date, productId, quantity, amount }) {
    if (!date || date === "") return false;
    if (!clientId || clientId === "" || !esUUID(clientId)) return false;
    if (!productId || productId === "" || !esUUID(productId)) return false;
    if (!quantity || isNaN(quantity)) return false;
    if (!amount || isNaN(amount)) return false;
    return true;
}

const postSales = async (req, res) => {
    
    let productName = "";

    //Sale data
    const { clientId, date, productId, quantity, amount } = req.body;

    try {    
        //Valid that the Product fields are valid.
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, error: "Sale fields are required" });
        
        //I search the client name  
        const client = await User.findByPk(clientId);
        if(!client) return res.status(404).json({ status:404, message: "Client not found"});
        const clientName = client.first_name.concat(' ', client.last_name);
        
        //I search the product name
        const wineProduct = await Wine.findByPk(productId);
        const liquorProduct = await Liquor.findByPk(productId);

        if(!wineProduct && !liquorProduct) return res.status(404).json({ status:404, message:"Product not found"});
        if(wineProduct) {productName = wineProduct.name}
        if(liquorProduct) {productName = liquorProduct.name}

        //I create the sale
        const sale = await Sale.create({
            client_name: clientName,
            product_name: productName,
            quantity,
            amount,
            date,
        });
        
        //I return the product data created
        res.status(201).json({ status: 201, message: "The sale was successfully saved", data: sale });
        
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = postSales;