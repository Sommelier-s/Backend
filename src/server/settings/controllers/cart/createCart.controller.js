const { Cart, User } = require("../../../../database/model/relationships");

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const postCart = async (req, res) => {
    //user id
    const { id } = req.query;
    const { cart, amount } =  req.body;

    try {
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        if(!id || id === "" || !esUUID(id)) return res.status(409).json({ status: 409, error: "The id has no UUID structure!" });
        if(!cart || cart.length === 0 || cart === "") return res.status(409).json({ status: 409, error: "The cart is empty!" });
        if(!amount || amount === "" || isNaN(amount)) return res.status(409).json({ status: 409, error: "Amount must be a number"});

        const findUser = await User.findByPk(id);
        if (!findUser) return res.status(404).json({ status: 404, error: "The user does not exist!"});

        const findCart = await Cart.findOne({ where: { user_id: id } });
        if(findCart) return res.status(400).json({ status: 404, error: "The user already has an active cart!"});
        
        const created = await Cart.create({
            user_id: id,
            cart: Cart,
            amount: amount,
        })
        
        res.status(200).json({ status: 200, message: "The cart has been created!", data: created });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });  
    }

}

module.exports = postCart;