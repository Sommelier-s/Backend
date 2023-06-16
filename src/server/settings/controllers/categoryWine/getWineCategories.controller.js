const Wine_category = require('../../../../database/model/wineCategory.model')

const getWineCategories = async (req, res) => { 
    try {
        const response = await Wine_category.findAll();
        //Valid if we have a response
        if (!response) return res.status(404).json({ status: 404, message: "Categries not found" })
        res.status(200).json({ status: 200, message: "The Categries was found", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = getWineCategories;