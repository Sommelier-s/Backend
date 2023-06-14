//I bring the models
const Vendor = require("../../../db/models/Vendor.model");
const Client = require("../../../db/models/Client.model");

//Function that checks if the id has a UUID structure.
function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

//Function that validates all the fields of body
function validateFields({ name, last_name, dni, address, pseudo_name }) {
    if (!name || name === "") return false;
    if (!last_name || last_name === "") return false;
    if (!dni || isNaN(dni)) return false;
    if (!address || address === "") return false;
    if (!pseudo_name || pseudo_name === "") return false
    return true;
}

const postClient = async (req, res) => {
    //Vendor ID
    const { id } = req.query;
    //Customer data
    const { name, last_name, dni, address, pseudo_name } = req.body;

    try {
        //Valid if the id comes from the query
        if (Object.keys(req.query).length === 0) return res.status(400).json({ status: 400, error: "The id field is required" });
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        //Valid if the seller exists
        const vendor = await Vendor.findByPk(id);
        if (!vendor) return res.status(404).json({ status: 404, error: "The seller does not exist" });

        //Valid if the seller is an administrator
        if (vendor.rol !== "administrador") return res.status(401).json({ status: 401, error: "Seller is not an administrator" });

        //Valid that the Customer fields are valid.
        if (!validateFields(req.body)) return res.status(409).json({ status: 409, error: "Customer fields are not valid" });
        //If the client already exists, it returns an error.
        const clientSearch = await Client.findOne({ where: { dni: dni } });
        if (clientSearch) return res.status(400).json({ status: 400, error: "The customer already exists" });
        //I create the customer
        const client = await Client.create({
            name,
            last_name,
            dni,
            address,
            pseudo_name
        })
        //I return the customer data created
        res.status(201).json({ status: 201, message: "The client was successfully created", data: client });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = postClient;