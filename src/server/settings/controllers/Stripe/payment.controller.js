// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});




const payment = async (req, res) => {
    //Take the price per body
    const { amount } = req.body;
    if (!amount ) return res.status(400).json({ error:"Try again"})
    try {
        //Create the payment attempt
        const paymentIntent = await stripe.paymentIntents.create({
            //Defines the type of currency
            currency: 'USD',
            //We place the price
            amount: amount * 100,
            //Automatic payment method enabled
            automatic_payment_methods: {
                enabled: true,
            }
        })
        //Responds with the secret client
        res.status(200).json({ clientSecret: paymentIntent.client_secret })

     } catch (error) {
        //In case of error, reply with a 404
        res.status(404).json({
            error: {
                message: error.message,
            }
        })
    }
}

module.exports = payment