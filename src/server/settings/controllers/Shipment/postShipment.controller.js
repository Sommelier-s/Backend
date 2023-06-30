const { Shipment, User } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({
    userId,
    cart,
    amount,
    firstName,
    lastName,
    postalCode,
    province,
    city,
    address,
    number,
    apartment,
    instructions,
    phone, }) {
    if (!cart || cart.length === 0) return false;
    if (!firstName || firstName === "") return false;
    if (!lastName || lastName === "") return false;
    if (!instructions || instructions === "") return false;
    if (!city || city === "") return false;
    if (!address || address === "") return false;
    if (!province || province === "") return false;
    if (!amount || isNaN(amount)) return false;
    if (!apartment || isNaN(apartment)) return false;
    if (!phone || isNaN(phone)) return false;
    if (!postalCode || isNaN(postalCode)) return false;
    if (!number || isNaN(number)) return false;
    if (!userId || userId === "" || !esUUID(userId)) return false;
    return true;
}


const postShipment = async (req, res) => {

    const {
        userId,
        cart,
        amount,
        firstName,
        lastName,
        postalCode,
        province,
        city,
        address,
        number,
        apartment,
        instructions,
        phone,
    } = req.body;

    try {
        //Valid fields
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, message: 'Invalid fields' });
        //Valid if the user exist
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ status: 404, message: 'User does exist' });
        //Concat first name and last name
        const clientName = firstName.concat(' ', lastName);
        //Create the shipment
        const response = await Delivery.create({
            userId,
            cart,
            amount,
            name: clientName,
            postalCode,
            province,
            city,
            address,
            number,
            apartment,
            instructions,
            phone
        })

        return res.status(200).json({ status: 200, message: 'Delivery successfully created', data: response })

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = postShipment;