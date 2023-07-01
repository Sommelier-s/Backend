const { Shipment } = require('../../../../database/model/relationships');

const getRealizedShipment = async (req, res) => {

    try {
        const response =await Shipment.findAll({
            where: {
                pending: false
            }
        })
        if (!response) return res.status(404).json({ status: 404, message: 'There is not realized shipments' });

        return res.status(200).json({ status: 200, message: 'Shipment found', data: response });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = getRealizedShipment;