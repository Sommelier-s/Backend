// Replace if using a different env file or config
require("dotenv").config();

const { STRIPE_SECRET_KEY } = process.env;

const stripe = require("stripe")(STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});




const payment = async (req, res) => {
    //Take the price per body
    const { amount } = req.body;

    if (!amount) return res.status(400).json({
        status: 400, error: "The amount field is required"
    })

    if (amount === "") return res.status(400).json({
        status: 400, error: "The amount field is required"
    })


    if (isNaN(amount)) return res.status(400).json({
        status: 400, error: "The amount field must be an integer"
    })


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
        res.status(200).json({ status: 200, message: "Purchase successfully completed", data: paymentIntent.client_secret })

    } catch (error) {
        //In case of error, reply with a 404
        res.status(500).json({
            error: {
                status: 500,
                error: error.message,
            }
        })
    }
}

module.exports = payment