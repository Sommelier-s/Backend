const Wine = require('../../../../database/model/wine.model')

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const deleteWine = async (req, res) => {
    //wine id
    const { id } = req.params;
    try {
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        const product = await Liquor.findByPk(id);
        //Valid if we have a response
        if (!product) return res.status(404).json({ status: 404, message: "Product not found" })
        product.setDataValue('isActive', false);
        await product.save();
        res.status(200).json({ status: 200, message: "The product was been deleted", data: product })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = deleteWine;