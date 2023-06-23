const { Purchased_products } = require('../../../../database/model/relationships');

// Function that checks if the id has a UUID structure.
function esUUID(id) {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const getPurchasedProductsById = async (req, res) => {
  const { client_id } = req.body;
  
  try {
    // Validate if the id is correct
    if (!esUUID(client_id)) {
      return res.status(400).json({ status: 400, message: "Invalid client_id format" });
    }
    
    // Find purchased products by client_id
    const response = await Purchased_products.findAll({ where: { client_id } });
    
    // Validate if we have a response
    if (response.length === 0) {
      return res.status(404).json({ status: 404, message: "Products not found" });
    }
    
    res.status(200).json({ status: 200, message: "The products were found", data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

module.exports = getPurchasedProductsById;
