const { Offer, User, Liquor, Wine } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const deleteOffer = async (req, res) => {

    //Offer id
    const { id } = req.params;
    //User id
    const { userId } = req.query;


    try {
        if (!esUUID(id)) return res.status(409).json({ status: 409, message: 'Invalid id structure' });

        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ status: 404, message: 'User does exist' });
        if (!user.is_Admin) return res.status(401).json({ status: 401, messgae: 'Access denied' });

        const response = await Offer.findByPk(id);
        if (!response) res.status(404).json({ status: 404, message: 'Product not found' });

        const liquor = await Liquor.findByPk(response.product_id);
        const wine = await Wine.findByPk(response.product_id);

        if (!wine && !liquor) return res.status(404).json({ status: 404, message: 'Product does exist' });
        if (wine) {
            wine.update({ price: response.regular_price })
        } else {
            liquor.update({ price: response.regular_price })
        }

        response.destroy();

        return res.status(200).json({ status: 200, message: 'Offer deleted' });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = deleteOffer;