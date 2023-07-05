const { Offer, User, Wine, Liquor } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ discount, offerId }) {
    if (!discount || isNaN(discount)) return false;
    if (!offerId || offerId === "" || !esUUID(offerId)) return false;
    return true;
}

const putOffer = async (req, res) => {

    //User id
    const { id } = req.params

    let { discount, offerId } = req.body;

    let price = "";
    finalDiscount = (100 - discount) / 100;

    try {
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, message: 'Invalid fields' });
        if (!esUUID(id)) return res.status(409).json({ status: 409, message: 'Ivalid id structure' });

        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, message: 'User does exist' });
        if (!user.is_Admin) return res.status(401).json({ status: 401, messgae: 'Access denied' });

        const response = await Offer.findByPk(offerId);
        const liquor = await Liquor.findByPk(response.product_id);
        const wine = await Wine.findByPk(response.product_id);

        if (!liquor && !wine) return res.status(404).json({ status: 404, message: 'Product not found' });
        if (liquor) {
            price = (response.regular_price * finalDiscount).toFixed(2);
            liquor.update({ price });
        } else {
            price = (response.regular_price * finalDiscount).toFixed(2);
            wine.update({ price });
        }

        response.update({
            discount,
            price
        });

        return res.status(200).json({ status: 200, message: 'Offer updated', data: response });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = putOffer;