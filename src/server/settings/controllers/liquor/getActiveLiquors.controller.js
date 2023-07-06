const { Liquor } = require('../../../../database/model/relationships')

const getActiveLiquors = async (req, res) => {
    try {
        const products = await Liquor.findAll({ where: { isActive: true } });
        
        if (!products || products.length === 0) return res.status(404).json({ status: 404, error: "Product wasn't found!" })
        res.status(200).json({ status: 200, message: "The products were found!", data: products })
    } catch (error) {
        return res.status(500).json({ status: 500, error: "Internal server error!" })
    }
};

module.exports = getActiveLiquors;