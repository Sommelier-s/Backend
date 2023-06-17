const { Liquor, User } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const PutLiquor = async (res, req) => {
    const { userId } = req.query;
    const { id } = req.params;
    const data = req.body;

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
        if (user.isAdmin === false) return res.status(401).json({ status: 401, error: "User is not an administrator" });
        //If the product already exists, it returns an error.
        const product = await Liquor.findByPk(id);
        if (!product) return res.status(400).json({ status: 400, error: "The product does exist" });
        //I set the product
        product.set({
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            picture: data.picture,
        });
        await product.save();
        //I return the product data modified
        res.status(201).json({ status: 201, message: "The product was successfully modified", data: product });
    } catch (error) {
        res.status(500).json({ status: 500, message: error, message })
    }
}

module.exports = PutLiquor;