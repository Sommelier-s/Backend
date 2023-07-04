const {
    Liquor_rating,
    Wine_rating,
    Wine,
    Liquor,
  } = require("../../../../database/model/relationships");
  
  function isUUID(id) {
    const uuidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
  }
  
  const getCommentsByProduct = async (req, res) => {
    const { id } = req.params;
    let response = [];
    try {
      // Check if the id is correct
      if (id === "") {
        return res
          .status(400)
          .json({ status: 400, error: "The product id field is empty" });
      }
      if (!isUUID(id)) {
        return res.status(409).json({
          status: 409,
          error: "The product id field does not have a valid UUID structure",
        });
      }
  
      const liquorComments = await Liquor_rating.findAll({
        where: {
          user_id: id,
        },
        attributes: ["comment", "puntuation", "liquor_id"],
      });
      const wineComments = await Wine_rating.findAll({
        where: {
          user_id: id,
        },
        attributes: ["comment", "puntuation", "wine_id"],
      });
  
      if (!wineComments.length && !liquorComments.length) {
        return res
          .status(404)
          .json({ status: 404, message: "Comments not found" });
      }
  
      const wineAllProperty = await Promise.all(
        wineComments.map(async (wine) => {
          const wineSearch = await Wine.findByPk(wine.wine_id);
          return {
            search: wineSearch.dataValues,
            comment: wine.comment,
            puntuation: wine.puntuation,
          };
        })
      );
  
      const liquorAllProperty = await Promise.all(
        liquorComments.map(async (liquor) => {
          const liquorSearch = await Liquor.findByPk(liquor.liquor_id);
          return {
            search: liquorSearch.dataValues,
            comment: liquor.comment,
            puntuation: liquor.puntuation,
          };
        })
      );
  
      const getAll = [...wineAllProperty, ...liquorAllProperty];
  
      return res
        .status(200)
        .json({ status: 200, message: "Comment found", data: getAll });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  };
  
  module.exports = getCommentsByProduct;
  