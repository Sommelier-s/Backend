const Liquor = require("../../../../database/model/liquor.model.js");

const getAllLiquor = async (req, res) => { 
    try {
        const response = await Liquor.findAll();
        //Valid if we have a response
        if (!response) return res.status(404).json({ status: 404, message: "Product not found" })
        res.status(200).json({ status: 200, message: "The product was found", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = getAllLiquor;