//I bring the models
const { Wine, User, Wine_category } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ name, description, price, stock, wineCategoryId }) {
    if (!name || name === "") return false;
    if (!description || description === "") return false;
    if (!price || isNaN(price)) return false;
    if (!stock || isNaN(stock)) return false;
    if (!wineCategoryId || wineCategoryId === "") return false;
    return true;
}

const postWine = async (req, res) => {
    //user ID
    const { id } = req.query;
    //Product data
    const { name, description, price, stock, picture, wineCategoryId } = req.body;
    try {
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
        //Valid that the Product fields are valid.
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, error: "Product fields are not valid" });
        //If the product already exists, it returns an error.
        const productSearch = await Wine.findOne({ where: { id: id } });
        if (productSearch) return res.status(400).json({ status: 400, error: "The product already exists" });
        //Valid if the wine category exist
        const category = await Wine_category.findByPk(wineCategoryId);
        if(!category) return res.status(404).json({ status:404, message: "The category does exist"});
        
        //I create the product
        const product = await Wine.create({
            user_id: id,
            name,
            description,
            price,
            stock,
            picture,
        });
        // Add the category to product
        product.setWine_category(wineCategoryId);
        //I return the product data created
        res.status(201).json({ status: 201, message: "The product was successfully created", data: product });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = postWine;