const { Cart, User } = require("../../../../database/model/relationships");

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getCartByUserId = async (req, res) => {
    //user id
    const { id } = req.query

    try {
        //Valid if the user id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        if(!id || id === "" || !esUUID(id)) return res.status(409).json({ status: 409, error: "The id has no UUID structure!" });
        
        const findUser = await User.findByPk(id);
        if (!findUser) return res.status(404).json({ status: 404, error: "the user does not exist!"});
        
        const find = await Cart.findOne({ where: { user_id: id } });
        if(!find) return res.status(404).json({ status: 404, error: "The cart does not exist!"});
        
        res.status(200).json({ status: 200, message: "The cart has been found!", data: find});
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = getCartByUserId;