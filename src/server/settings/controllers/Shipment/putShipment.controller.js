const { Shipment, User } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}


const putShipment = async (req, res) => {

    //Shipment id
    const { id } = req.params;
    //User id
    const { userId } = req.query

    try {
        //Valid shipment id
        if (!esUUID(id)) return res.status(409).json({ status: 409, message: 'Invalid is structure' });
        const shipment = await Shipment.findByPk(id);
        if (!shipment) return res.status(404).json({ status: 404, message: 'Shipment does exist' });
        //Valid user id
        if (!esUUID(userId)) return res.status(409).json({ status: 409, message: 'Invalid is structure' });
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ status: 404, message: 'User does exist' });
        if (!user.is_Admin) return res.status(401).json({ status: 401, message: 'Unauthorized user' });

        //Update shipment status
        if (shipment.pending === true) {
            shipment.update({
                pending: false
            })
        } else return res.status(400).json({ status: 400, message: 'Shipment is already pending' });

        return res.status(200).json({ status: 200, message: 'Shipment in now realized', data: shipment });

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = putShipment;