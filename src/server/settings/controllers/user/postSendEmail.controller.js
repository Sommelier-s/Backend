const { User } = require("../../../../database/model/relationships");
const { sendPurchaseReceipt, sendPurchaseReceiptDelivery } = require("../../helper/user/email");

const sendEmail = async (req, res) => {
    

    const { id, name, email, type} = req.body;
    console.log("Y trae estos datos: ", req.body);
    try {

        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, message: "El usuario no existe" });


        if (type) {
            if (type == "delivery") {
                await sendPurchaseReceiptDelivery({ email, name });
            } else {
                await sendPurchaseReceipt({ email, name });
            }
        }
        res.status(200).json({ status: 200, message: "El usuario ha sido notificado" })

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}


module.exports = sendEmail;