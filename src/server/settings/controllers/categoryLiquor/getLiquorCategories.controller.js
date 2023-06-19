const Liquor_category = require("../../../../database/model/liquorCategory.model");

const getLiquorCategories = async (req, res) => {
    try {
        const response = await Liquor_category.findAll();
        //Valid if we have a response
        if (!response) return res.status(404).json({ status: 404, message: "Categries not found" })
        if (response.length === 0) return res.status(404).json({ status: 404, message: "Categries not found" })
        res.status(200).json({ status: 200, message: "The Categries was found", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = getLiquorCategories;