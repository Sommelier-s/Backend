const { Wine, User } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const controllerPutWine = async (req, res) => {
    const { userId } = req.query;
    const { id } = req.params;
    const { name,description, price, stock, picture, isActive} = req.body;

    try {
        //Valid if the user id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The product id field is empty" });
        if (userId === "") return res.status(400).json({ status: 400, error: "The user id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The product id field has no UUID structure" });
        if (!esUUID(userId)) return res.status(409).json({ status: 409, error: "The user id field has no UUID structure" });
        //Valid if the user exists
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ status: 404, error: "The user does not exist" });
        //Valid if the user is an administrator
        if (user.is_Admin === false) return res.status(401).json({ status: 401, error: "User is not an administrator" });

        const allWines=await Wine.findAll();
        const products=allWines.filter((wine)=> wine.name.toLowerCase() === name.toLowerCase());
        if (products.length !== 0) return res.status(400).json({ status: 400, error: "One product already has that name" });
        //If the product already exists, it returns an error.
        const product = await Wine.findByPk(id);
        if (!product) return res.status(400).json({ status: 400, error: "The product does exist" });

        //I set the product

        product.update({
            name,
            description,
            price,
            stock,
            picture,
            isActive
        });

        //I return the product data modified
        res.status(201).json({ status: 201, message: "The product was successfully modified", data: product });
    } catch (error) {
        res.status(500).json({ status: 500, message: error, message })
    }
}

module.exports = controllerPutWine;