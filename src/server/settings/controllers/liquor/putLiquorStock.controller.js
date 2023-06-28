const { Liquor } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const putLiquorStock = async (req, res) => {

    const { id } = req.params;
    const { quantity } = req.body;

    try {
        //Valid if the id is correct
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The product id field has no UUID structure" });

        //If the product does exists returns an error.
        const product = await Liquor.findByPk(id);
        if (!product) return res.status(400).json({ status: 400, error: "The product does exist" });
        const stock = product.stock - quantity
        //I set the product
        product.update({
            stock
        });

        //I return the product data modified
        res.status(201).json({ status: 201, message: "The product was successfully modified", data: product });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error" })
    }
}
module.exports = putLiquorStock;