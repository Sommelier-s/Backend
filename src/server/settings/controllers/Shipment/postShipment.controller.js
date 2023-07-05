const { Shipment, User } = require('../../../../database/model/relationships');

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({
    user_id,
    cart,
    amount,
    firstName,
    lastName,
    postal_code,
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
    if (!phone || isNaN(phone)) return false;
    if (!postal_code || isNaN(postal_code)) return false;
    if (!number || isNaN(number)) return false;
    if (!user_id || user_id === "" || !esUUID(user_id)) return false;
    return true;
}


const postShipment = async (req, res) => {

    let {
        user_id,
        cart,
        amount,
        firstName,
        lastName,
        postal_code,
        province,
        city,
        address,
        number,
        apartment,
        instructions,
        phone,
    } = req.body;

    try {
        console.log(cart);
        //Valid fields
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, message: 'Campos inválidos' });
        //Valid if the user exist

        const user = await User.findByPk(user_id);
        if (!user) return res.status(404).json({ status: 404, message: 'No existe el usuario' });

        //Concat first name and last name
        const clientName = firstName.concat(' ', lastName);
        //Create the shipment

        if (apartment == "") {
            apartment = 0;
        }

        const response = await Shipment.create({
            user_id,
            cart,
            amount,
            name: clientName,
            postal_code,
            province,
            city,
            address,
            number,
            apartment,
            instructions,
            phone
        })

        return res.status(201).json({ status: 201, message: 'Se ha guardado el envio correctemente', data: response })

    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

module.exports = postShipment;