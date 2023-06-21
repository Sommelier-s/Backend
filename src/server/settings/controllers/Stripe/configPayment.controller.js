require("dotenv").config();


const configPayment = (req, res) => {
  
        //Answer with the public key
        res.status(200).send({
            publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        });

}

module.exports = configPayment;