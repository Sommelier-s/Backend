const { User, Liquor_rating, Wine_rating } = require("../../../../database/model/relationships");


function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getAllRatingsByUser = async (req, res) => {
    //user id
    const { id } = req.query;

    try {
        // validate if the id is valid
        if(!id || id === "" || !esUUID(id)) return res.status(409).json({status: 409, error: "The id has no uuid structure"});
        //validate if the user and product exist
        const findUser = await User.findByPk(id);
        if(!findUser) return res.status(404).json({status: 404, error: "The user does not exist!"});
        //Search for the rating
        const findRatingLiquor = await Liquor_rating.findAll({ where: { user_id: id } });
        const findRatingWine = await Wine_rating.findAll({ where: { user_id: id } });

        const concatRatings = [...findRatingLiquor,...findRatingWine];
        if(!concatRatings || concatRatings.length === 0) return res.status(404).json({status:404, error: "The user didn't rate any product yet!"});
        res.status(200).json({status: 200, message: "The rating were found!!", data: concatRatings});
    } catch (error) {
        return res.status(500).json({status: 500, error: error.message });
    }
}

module.exports = getAllRatingsByUser;