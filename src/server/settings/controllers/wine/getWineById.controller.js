const { Wine, Wine_category } = require('../../../../database/model/relationships')

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getWineById = async (req, res, next) => {
    //wine id
    //b3a5e93e-4a0b-4815-8a64-694e6528d84a
    const { id } = req.params;
    console.log(id);
    if (esUUID(id)) {
        try {
            //Valid if the id is correct
            const response = await Wine.findByPk(id, {include: Wine_category});
            //Valid if we have a response
            if (!response) return res.status(404).json({ status: 404, message: "Product not found" })
            res.status(200).json({ status: 200, message: "The product was found", data: response })
        } catch (error) {
            return res.status(500).json({ status: 500, message: "Internal server error" })
        }
    } else {
        next();
    }
};

module.exports = getWineById;