const { Wine, Wine_rating } = require("../../../../database/model/relationships");

function esUUID(id) {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const ratingAverage = async (arr) => {
    const allRatingsArr = arr.map((ratings) =>{return ratings.rating});
    let auxiliar = 0;
    for (let i = 0; i < allRatingsArr.length; i++) {
        auxiliar = auxiliar + allRatingsArr[i]
    };
    productAverage = Math.floor(auxiliar / allRatingsArr.length)
    return productAverage;
}

const getLiquorRatingAverage = async (req, res) => {
    //productId
    const { id } = req.query;

    try {
        if(!id || id === "" || !esUUID(id)) return res.status(409).json({status: 409, error: "The id has no uuid structure!"});
        //validate if the product existe
        const product = await Wine.findByPk(id)
        if(!product) return res.status(404).json({status:404, error:"Product not found!"});
        //validate if the ratings for that product exist
        const allRatings = await Wine_rating.findAll({ where: { wine_id: id } });
        if(!allRatings) return res.status(404).json({status:404, error:"Ratings not found!"});
        //get the average
        const average = await ratingAverage(allRatings);
        //send the average
        res.status(200).json({status: 200, message: "The average rating has been found!", data: average});
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = getLiquorRatingAverage;