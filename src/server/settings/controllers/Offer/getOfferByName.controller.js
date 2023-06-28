const { Offer } = require('../../../../database/model/relationships');
const { Op } = require('sequelize');

const getOfferByName = async (req, res) => {

    const { name } = req.query;

    try {
        //valid name field
        if (name === "") return res.status(400).json({ status: 400, message: 'name is required' });
        const response = await Offer.findAll({
            where: {
                product_name: {
                    [Op.iLike]: `${name}`,
                }
            }
        });
        if (!response || response.length === 0) return res.status(404).json({ status: 404, message: 'Offer not found' });
        return res.status(200).json({ status: 200, message: 'Offer found', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = getOfferByName;