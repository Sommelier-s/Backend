const { User, Liquor, Liquor_rating } = require("../../../../database/model/relationships");


function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getLiquorRating = async (req, res) => {
    //user id
    const { id } = req.query;
    //product id
    const { productId } = req.body;

    try {
        // validate if the ids are valid
        if(!id || id === "" || !esUUID(id)) return res.status(409).json({status: 409, error: "The id has no uuid structure"});
        if(!productId || productId === "" || !esUUID(productId)) return res.status(409).json({status: 409, error: "The productId has no uuid structure"});
        //validate if the user and product exist
        const findUser = await User.findByPk(id);
        const findProduct = await Liquor.findByPk(productId);
        if(!findUser) return res.status(404).json({status: 404, error: "The user does not exist!"});
        if(!findProduct) return res.status(404).json({status: 404, error: "The liquor does not exist!"});
        //Search for the rating
        const findRating = await Liquor_rating.findOne({ where: { user_id: id, liquor_id: productId } });
        if(!findRating) return res.status(404).json({status:404, error: "The user didn't rate this product yet!"});

        res.status(200).json({status: 200, message: "The rating was found!", data: findRating});
    } catch (error) {
        return res.status(500).json({status: 500, error: error.message });
    }
}

module.exports = getLiquorRating;