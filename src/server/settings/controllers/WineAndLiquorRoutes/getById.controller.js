const { Liquor, Wine, Liquor_category, Wine_category } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getLiquorById = async (req, res) => {
    // Drink ID
    const { id } = req.query;

    console.log(id);
    try {

        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty!" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure!" });

        console.log("paso la validacion del id");
        //Valid if the id is correct
        const liquor = await Liquor.findByPk(id, { include: Liquor_category });
        console.log("aqui paso la busqueda")
        //Valid if we have a response

        if (liquor) return res.status(200).json({ status: 200, message: "The product was found", data: liquor })

        //Valid if the id is correct
        const wine = await Wine.findByPk(id, { include: Wine_category });
        //Valid if we have a response
        if (!wine) return res.status(404).json({ status: 404, message: "Product not found" })
        return res.status(200).json({ status: 200, message: "The product was found", data: wine })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }

}

module.exports = getLiquorById;