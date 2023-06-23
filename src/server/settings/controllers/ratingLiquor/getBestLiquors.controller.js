const { Liquor, Liquor_rating } = require("../../../../database/model/relationships");
const calcularPromedioPuntuacionLiquor = require("./calcularPromedioPuntuacionLiquor");

const getBestLiquors = async (req, res) => {
   const { quantity } = req.query;
  try {
    if(!quantity || !quantity || isNaN(quantity)) return res.status(409).json({status: 409, error: "Quantity must be a numbers!!"});
    const liquorsRatings = await Liquor_rating.findAll({
      order: [["liquor_id", "DESC"]],
    });
    if(!liquorsRatings || liquorsRatings.length === 0) return res.status(404).json({status: 404, error: "There aren't any reviews yet!!"});
    const averageLiquors = calcularPromedioPuntuacionLiquor(liquorsRatings);
    const auxLiquors = averageLiquors.slice(0, quantity)
    const bestLiquors = [];
    for (let i = 0; i < auxLiquors.length; i++) {
      let findLiquor = await Liquor.findByPk(auxLiquors[i].liquor_id)
      bestLiquors.push(findLiquor)
    }

    res.status(200).json({status: 200, message: "The best Liquors have been found!!", data: bestLiquors})
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = getBestLiquors;

/*const arr = [
  { id: 11, puntuation: 3, product_id: "e693a856-dd83-473f-b8ec-84301154f454" },
  { id: 2, puntuation: 1, product_id: "e693a856-dd83-473f-b8ec-84301154f454" },
  { id: 7, puntuation: 5, product_id: "e693a856-dd83-473f-b8ec-84301154f454" },
  { id: 1, puntuation: 4, product_id: "e693a856-dd83-473f-b8ec-84301154f454" },
  { id: 10, puntuation: 4, product_id: "38b58089-4bf2-4d10-aa6e-098e1f40f9cc" },
  { id: 12, puntuation: 4, product_id: "38b58089-4bf2-4d10-aa6e-098e1f40f9cc" },
  { id: 4, puntuation: 5, product_id: "38b58089-4bf2-4d10-aa6e-098e1f40f9cc" },
  { id: 8, puntuation: 2, product_id: "cb419c6a-583a-4af4-97ff-e17ad1707c71" },
  { id: 6, puntuation: 1, product_id: "cb419c6a-583a-4af4-97ff-e17ad1707c71" },
  { id: 3, puntuation: 3, product_id: "cb419c6a-583a-4af4-97ff-e17ad1707c71" },
  { id: 9, puntuation: 3, product_id: "1f8fca1a-e725-4bf6-aac4-5aaed03181bf" },
  { id: 13, puntuation: 5, product_id: "1f8fca1a-e725-4bf6-aac4-5aaed03181bf" },
  { id: 5, puntuation: 2, product_id: "1f8fca1a-e725-4bf6-aac4-5aaed03181bf" },
  { id: 14, puntuation: 4, product_id: "e525ae37-8bb2-44e9-bc8d-78894110702c" },
  { id: 15, puntuation: 5, product_id: "e525ae37-8bb2-44e9-bc8d-78894110702c" },
  { id: 16, puntuation: 1, product_id: "e525ae37-8bb2-44e9-bc8d-78894110702c" },
  { id: 17, puntuation: 3, product_id: "e525ae37-8bb2-44e9-bc8d-78894110702c" },
  { id: 18, puntuation: 2, product_id: "e525ae37-8bb2-44e9-bc8d-78894110702c" },
  { id: 19, puntuation: 5, product_id: "465ff453-021c-4f84-805e-8efe2e1882da" },
  { id: 20, puntuation: 2, product_id: "465ff453-021c-4f84-805e-8efe2e1882da" },
  { id: 21, puntuation: 2, product_id: "465ff453-021c-4f84-805e-8efe2e1882da" },
  { id: 22, puntuation: 3, product_id: "465ff453-021c-4f84-805e-8efe2e1882da" },
  { id: 23, puntuation: 4, product_id: "3fd3f4be-2f21-48f4-b4dc-25339d780ee9" },
  { id: 24, puntuation: 1, product_id: "3fd3f4be-2f21-48f4-b4dc-25339d780ee9" },
  { id: 25, puntuation: 5, product_id: "3fd3f4be-2f21-48f4-b4dc-25339d780ee9" },
  { id: 26, puntuation: 4, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  { id: 27, puntuation: 3, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  { id: 28, puntuation: 1, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  { id: 29, puntuation: 5, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  { id: 30, puntuation: 4, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  { id: 31, puntuation: 2, product_id: "3eed1e7f-b830-4334-ba03-9a025b55f318" },
  
];*/