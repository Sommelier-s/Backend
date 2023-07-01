const { Offer, Wine, Liquor, User } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ productId, discount }) {
    if (!discount || isNaN(discount)) return false;
    if (!productId || productId === "" || !esUUID(productId)) return false;
    return true;
}

const postOffer = async (req, res) => {

    //User id
    const { id } = req.query;
    const { productId, discount } = req.body;
    
    const finalDiscount = (100 - discount) / 100;
    let productName = "";
    let image = '';

    try {
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, message: 'Invalid fields' });
        if (!esUUID(id)) return res.status(409).json({ status: 409, message: 'Invalid id structure' });

        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, message: 'User does exist' });
        if (!user.is_Admin) return res.status(401).json({ status: 401, messgae: 'Access denied' });

        const liquor = await Liquor.findByPk(productId);
        const wine = await Wine.findByPk(productId);
        if (!liquor && !wine) return res.status(404).json({ status: 404, message: 'Product not found' });
        if (liquor) {
            productName = liquor.name;
            image = liquor.picture
            price = liquor.price * finalDiscount;
        } else {
            productName = wine.name;
            image = wine.picture
            price = wine.price * finalDiscount;
        }
        const response = await Offer.create({
            product_id: productId,
            product_name: productName,
            discount,
            price,
            image
        })
        return res.status(200).json({ status: 200, message: 'Offer created', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = postOffer;