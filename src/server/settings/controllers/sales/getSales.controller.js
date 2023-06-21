const { Sale } = require('../../../../database/model/relationships')

const getSales = async (req, res) => {
    try {
        const response = await Sale.findAll();
        //Valid if we have a response
        if (!response) return res.status(404).json({ status: 404, message: "Sale not found" })
        res.status(200).json({ status: 200, message: "The Sale was found", data: response })

    } catch (error) {
        return res.status(500).json({ status: 500, mesagge: "Internal server error" })
    }
};

module.exports = getSales;