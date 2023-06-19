const { Liquor, Liquor_category } = require('../../../../database/model/relationships')

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getLiquorById = async (req, res) => {
    // Liquor ID
    const { id } = req.query;
    
    if (esUUID(id)) {
        try {
            //Valid if the id is correct
            const response = await Liquor.findByPk(id, {include: Liquor_category});
            //Valid if we have a response
            if (!response) return res.status(404).json({ status: 404, message: "Product not found" })
            res.status(200).json({ status: 200, message: "The product was found", data: response })
        } catch (error) {
            return res.status(500).json({ status: 500, message: "Internal server error" })
        }
    } else {
        next();
    }
}

module.exports = getLiquorById;