const { Offer } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getOfferById = async (req, res) => {

    const { id } = req.params;

    try {
        //Valid the id
        if (id === "") return res.status(400).json({ status: 400, message: 'Param id is required' });
        if (!esUUID(id)) return res.status(409).json({ status: 409, message: 'Id structure not valid' });
        const response = await Offer.findByPk(id);
        if (!response) return res.status(404).json({ status: 404, message: 'Offer not found' });
        return res.status(200).json({ status: 200, message: 'Offer found', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = getOfferById;