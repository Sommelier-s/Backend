const Wine_category = require("../../../../database/model/wineCategory.model");
const { User } = require('../../../../database/model/relationships');

function esUUID(id) {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const postWineCategories = async (req, res) => {
  try {
    const { id } = req.query;
    const { name } = req.body;
     //Valid if the id comes from the query
     if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
     //Valid if the id is correct
     if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
     if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
     //Valid if the seller exists
     const user = await User.findByPk(id);
     if (!user) return res.status(404).json({ status: 404, error: "The user does not exist" });
     //Valid if the user is an administrator
     if (user.is_Admin === false) return res.status(401).json({ status: 401, error: "User is not an administrator" });
    
    if (!name) {
      return res.status(404).send("The name field is empty!");
    }
    // Create a new Wine Category
    const addCategory = await Wine_category.create({
      name
    });
    res.status(201).json({
        status: 201,
        message: "The Wine category was successfully created!",
        data: addCategory,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postWineCategories;
