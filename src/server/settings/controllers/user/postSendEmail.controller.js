const { User } = require("../../../../database/model/relationships");
const { sendBannedEmail, sendUnbanEmail, sendEmailForJobPromotionEmail, sendUnsubscribeEmail } = require("../../helper/user/email");

const sendEmail = async (req, res) => {
    console.log("entro en la consulta");

    const { id, name, email, type, status } = req.body;
    console.log("Y trae estos datos: ", req.body);
    try {

        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 404, message: "El usuario no existe" });


        if (type == "bannned") {
            if (status) {
                await sendUnbanEmail({ email, name });
            } else {
                await sendBannedEmail({ email, name });
            }
        } else {
            if (status) {
                await sendEmailForJobPromotionEmail({ email, name });
            } else {
                await sendUnsubscribeEmail({ email, name });
            }
        }
        res.status(200).json({ status: 200, message: "El usuario ha sido notificado" })

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}


module.exports = sendEmail;