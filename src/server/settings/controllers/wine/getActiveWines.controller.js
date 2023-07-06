const { Wine } = require('../../../../database/model/relationships')

const getActiveWine = async (req, res) => {
    try {
        //const response = await Wine.findAll();

        const response = await Wine.findAll({
            where: {
                isActive: true
            }
        })

        
        //Valid if we have a response
        if (!response || response.length === 0) return res.status(404).json({ status: 404, message: "Product not found" })
        
        res.status(200).json({ status: 200, message: "The product was found", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, mesagge: "Internal server error" })
    }
};

module.exports = getActiveWine;