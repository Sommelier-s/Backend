const { Liquor, Liquor_rating } = require("../../../../database/model/relationships");

function esUUID(id) {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const ratingAverage = async (arr) => {
    const allRatingsArr = arr.map((ratings) => ratings.rating);
    let auxiliar = 0;
    for (let i = 0; i < allRatingsArr.length; i++) {
        auxiliar = auxiliar + allRatingsArr[i]
    };
    productAverage = Math.floor(auxiliar / allRatingsArr.length);
    return productAverage;
}

const getLiquorRatingAverage = async (req, res) => {
    const { productId } = req.params;

    try {
        if(!productId || productId === "" || esUUID(productId)) return res.status(409).json({status: 409, error: "The id has no uuid structure!"});
        
        const product = await Liquor.findByPk(productId)
        if(!product) return res.status(404).json({status:404, error:"Product not found!"})

        const allRatings = await Liquor_rating.findAll({ where: { liquor_id: productId } });
        if(!allRatings) return res.status(404).json({status:404, error:"Ratings not found!"})

        const average = await ratingAverage(allRatings);
        res.status(200).json({status: 200, message: "The average rating has been found!", data: average});
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = getLiquorRatingAverage;