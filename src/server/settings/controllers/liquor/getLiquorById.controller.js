const Liquor = require("../../../../database/model/liquor.model.js");

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getLiquorById = async (req, res) => {
    const { id } = req.query;
    try {
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        //validate if the liquor has been found
        const liquor = await Liquor.findByPk(id);
        if (!liquor) return res.status(404).json({status: 404, error: "Product not found!"})
        //send the liquor
        res.status(202).json({status: 202, message: "The product was found", data: liquor})
    } catch (error) {
        res.status(500).json({status: 500, error: error.message});
    }
}

module.exports = getLiquorById;