const Liquor = require("../../../../database/model/liquor.model.js");
const User = require('../../../../database/model/user.model');
//Function that checks if the id has a UUID structure.
//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ name, description, price, stock, variety }) {
    if (!name || name === "") return false;
    if (!description || description === "") return false;
    if (!price || isNaN(price)) return false;
    if (!stock || isNaN(stock)) return false;
    if (!variety || variety === "") return false;
    return true;
}

const postLiquor= async (req, res) => {
    const { id } = req.query;
    const { name, description, price, stock, picture, variety } = req.body;

    try {
        //Valid if the id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required!" });
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty!" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure!" });
        //Valid that the Product fields are valid.
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, error: "Product fields are not valid!" });
        //If the product already exists, it returns an error.
        const findProduct = await Liquor.findByPk(id);
        if (findProduct) return res.status(400).json({ status: 400, error: "The product already exists!" });
        //I create the product
        const product = await Liquor.create({
            name,
            description,
            price,
            stock,
            variety,
            picture,
            isActive: true,
        });
        //I return the product data created
        res.status(201).json({ status: 201, message: "The product was successfully created!", data: product });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = postLiquor;