const { Offer } = require('../../../../database/model/relationships');

const getOffer = async (req, res) => {
    try {
        const response = await Offer.findAll();
        if (!response || response.length === 0) return res.status(404).json({ status: 404, message: 'Offer not found' });
        return res.status(200).json({ status: 200, message: 'Offer found', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = getOffer;