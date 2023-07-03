const { Liquor, Wine } = require('../../../../database/model/relationships');

const getProductMounth = async (req, res) => {
    
    try {        
        const allLiquor = await Liquor.findAll();

        const allWine = await Wine.findAll();
        
        const responseAll = [...allLiquor, ...allWine];
        
        if (!responseAll) return res.status(400).json({ status: 400, error: "There are no beverages with that name" })

        if (responseAll.length === 0) return res.status(400).json({ status: 400, error: "There are no beverages with that name" })
        
        const productMonth = responseAll.filter((drink) => drink.is_product_month)
        console.log(productMonth);
        res.status(200).json({ status: 200, message: "The product was found", data: productMonth })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = getProductMounth;