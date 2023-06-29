const { Liquor_rating, Wine_rating } = require('../../../../database/model/relationships');

function esUUID(id) {
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidPattern.test(id);
}

const getCommentsByProduct = async (req, res) => {
    const { id } = req.params;
    
    let response = ""
    id
    try {
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The product id field is empty" });
        if (!esUUID(id)) return res.status(409).json({ status: 409, error: "The product id field has no UUID structure" });

        const liquorComments = await Liquor_rating.findAll({
            where: {
                liquor_id: id
            },
            attributes: ['comment', 'puntuation']
        });
        const wineComments = await Wine_rating.findAll({
            where: {
                wine_id: id
            },
            attributes: ['comment', 'puntuation']
        });
        console.log(wineComments);
        if ((!wineComments || wineComments.length === 0) && (!liquorComments || liquorComments.length === 0))
            return res.status(404).json({ status: 404, message: 'Comments not found' })

        if (wineComments.length > 0) { response = wineComments }
        if (liquorComments.length > 0) { response = liquorComments }

        return res.status(200).json({ status: 200, message: 'Comment found', data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = getCommentsByProduct;