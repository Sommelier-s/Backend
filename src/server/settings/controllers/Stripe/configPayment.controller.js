require("dotenv").config();

const { STRIPE_PUBLISHABLE_KEY } = process.env;

const configPayment = (req, res) => {

    try {
        if (!STRIPE_PUBLISHABLE_KEY) return res.status(404).json({ status: 404, error: "The public key environment variable does not exist" })
        //Answer with the public key
        res.status(200).json({
            status: 200,
            message: "Public key sent",
            data: STRIPE_PUBLISHABLE_KEY,
        });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }


}

module.exports = configPayment;