const { Sale } = require('../../../../database/model/relationships');

const getSales = async (req, res) => {
    let { month } = req.params;

    try {
        if(month.length === 1) {
            month = "0" + month;
        }
        //Get all sales
        const response = await Sale.findAll();
        //Filter by month required
        const salesFiltered = response.filter(sale => sale.date.substring(5,7) === month);

        //Valid if we have a response
        if (!salesFiltered || salesFiltered.length === 0) {
            return res.status(404).json({ status: 404, message: "Sales not found for the specified month" });
        }
        res.status(200).json({ status: 200, message: "Sales were found", data: salesFiltered});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

module.exports = getSales;
