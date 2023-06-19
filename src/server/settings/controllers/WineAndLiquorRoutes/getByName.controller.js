const { Liquor, Wine } = require('../../../../database/model/relationships');


const getLiquorByName = async (req, res) => {
    //Drink name
    const { name } = req.query;
    
    try {
        //Valid if the name comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The name field is required" });
        //Valid if the name is correct
        if (name === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        
        const allLiquor = await Liquor.findAll();
        let responseLiquor = allLiquor.filter((liquor) => liquor.name.toLowerCase().includes(name.toLowerCase()));
        
        //Valid if we have a response
        if (!responseLiquor) responseLiquor = [];

        const allWine = await Wine.findAll();
        let responseWine = allWine.filter((wine) => wine.name.toLowerCase().includes(name.toLowerCase()));
        
        if (!responseWine) responseWine = [];
        //Valid if we have a response
        
        const responseAll = [...responseLiquor, ...responseWine];
        
        if (!responseAll) return res.status(400).json({ status: 400, error: "There are no beverages with that name" })

        if (responseAll.length === 0) return res.status(400).json({ status: 400, error: "There are no beverages with that name" })

        res.status(200).json({ status: 200, message: "The product was found", data: responseAll })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal server error" })
    }
};

module.exports = getLiquorByName;