const { Shipment } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}



const getShipmentById = async (req, res) => {

    const { id } = req.params;

    try {
        if (!esUUID(id)) return res.status(409).json({ status: 409, messasge: 'Invalid id structure' });

        const response = Shipment.findAll({
            where: {
                id: id
            }
        })
        if (!response) return res.status(404).json({ status: 404, message: 'Shipment not found' });

        return res.status(200).json({ status: 200, message: 'Shipment found', data: response });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = getShipmentById