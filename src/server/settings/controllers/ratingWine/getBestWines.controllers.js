const { Wine, Wine_rating } = require("../../../../database/model/relationships");
const calcularPromedioPuntuacion = require("./calcularPromedioPuntuacion");

const getBestWines = async (req, res) => {
    const { quantity } = req.query;
  try {
    if(!quantity || !quantity || isNaN(quantity)) return res.status(409).json({status: 409, error: "Quantity must be a numbers!!"});
    const winesRatings = await Wine_rating.findAll({
      order: [["wine_id", "DESC"]],
    });
    if(!winesRatings || winesRatings.length === 0) return res.status(404).json({status: 404, error: "There aren't any reviews yet!!"});
    const averageWines = calcularPromedioPuntuacion(winesRatings);
    const auxWines = averageWines.slice(0, quantity)
    const bestWines = []
    for (let i = 0; i < auxWines.length; i++) {
      let findWine = await Wine.findByPk(auxWines[i].wine_id)
      bestWines.push(findWine)
    }

    res.status(200).json({status: 200, message: "The best Wines have been found!!", data: bestWines})
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = getBestWines;