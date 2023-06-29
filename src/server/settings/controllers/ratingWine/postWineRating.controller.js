const { Wine, User, Wine_rating } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ rating, productId, comment }) {
    if (!productId || productId === "" || !esUUID(productId)) return false;
    if (!comment || comment === "") return false;
    if (!rating || isNaN(rating)) return false;
    return true;
}

const postWineRating = async (req, res) => {
    const { id } = req.query;
    const { productId, rating, comment } = req.body;

    try {
        //Valid that the fields are valid.
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, error: "Some fields are missing or wrong!" });
        
        //Valid if the id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        
        //Valid if the user exists
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, error: "The user does not exist!" });

        //validate if the product exists
        const product = await Wine.findByPk(productId);
        if(!product) return res.status(404).json({ status: 404, error: "the product does not exist!" });
        
        //validate if the user has already voted this product for the first time
        const validateVote = await Wine_rating.findOne({ where: {user_id: id, wine_id: productId}});
        if(validateVote) return res.status(400).json({ status: 400, error: "The user already voted this product for the first time!!" });
        
        const addRating = await Wine_rating.create({
            rating,
            user_id: id,
            wine_id: productId,
            comment
        })
        res.status(200).json({ status: 200, message: "The raiting has been added successfully!", data: addRating });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = postWineRating; 