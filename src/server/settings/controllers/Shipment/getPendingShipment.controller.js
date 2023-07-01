const { Shipment } = require('../../../../database/model/relationships');

const getPendingShipment = async (req, res) => {

    try {
        //if (!esUUID(id)) return res.status(409).json({ status: 409, messasge: 'Invalid id structure' });

        const response = Shipment.findAll({
            where: {
                pending: true
            }
        })
        if (!response) return res.status(404).json({ status: 404, message: 'There is not pending shipment' });

        return res.status(200).json({ status: 200, message: 'Shipment found', data: response });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports =getPendingShipment;