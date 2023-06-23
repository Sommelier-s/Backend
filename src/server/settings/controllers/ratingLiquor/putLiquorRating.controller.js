const { Liquor, User, Liquor_rating } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields(idp, punt) {
    if (!idp || idp === "" || !esUUID(idp)) return false;
    if (!punt || isNaN(punt)) return false;
    return true;
}

const putLiquorRating = async (req, res) => {
    const { id } = req.query;
    const { productId, puntuation } = req.body;

    try {
        //Valid that the fields are valid.
        if (!validateFields(productId, puntuation)) return res.status(409).json({ status: 409, error: "Some fields are missing or wrong!" });
        
        //Valid if the id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        
        //Valid if the user exists
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, error: "The user does not exist!" });

        //validate if the product exists
        const product = await Liquor.findByPk(productId);
        if(!product) return res.status(404).json({ status: 404, error: "the product does not exist!" });

        const review = await Liquor_rating.findOne({ where: { Liquor_id: productId, user_id: id}})
        await review.update({
            puntuation: puntuation,
        });
        review.save();
        res.status(200).json({ status: 200, message: "The raiting has been updated successfully!", data: review });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = putLiquorRating; 