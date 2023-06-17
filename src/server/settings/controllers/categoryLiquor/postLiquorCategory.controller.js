const Liquor_category = require("../../../../database/model/liquorCategory.model");

const postLiquorCategories = async (req, res) => {
  try {
    const { name } = req.body;
    // console.log(req.body);
    // console.log(name);
    if (!name) {
      return res.status(404).send("The name field is empty!");
    }
    // Create a new Wine Category
    const addCategory = await Liquor_category.create({
      name
    });
    res.status(201).json({
        status: 201,
        message: "The Liquor category was successfully created!",
        data: addCategory,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postLiquorCategories;
