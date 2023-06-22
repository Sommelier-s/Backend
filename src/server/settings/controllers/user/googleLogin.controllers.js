const User = require("../../../../database/models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
dotenv.config();


// Enponit login Google
const googlelogin = async (req, res) => {

    const { name, email, image } = req?.body?.user;
    console.log(email);
    try {

        // We verify that the email is valid that it is not undefined
        if (email) {
            // We search the database that excites
            let user = await User.findOne({ where: { email } });
            // We verify it does not exist if it does not exist we save them
            if (!user) {

                const customer = await stripe.customers.create({
                    name: `${name.split(" ")[0]} ${name.split(" ")[1]}`,
                    email,
                });

                // Validate the Customer object.
                if (!customer.id) {
                    throw new Error("Failed to create customer in Stripe.");
                }

                // We encrypt the password and concatenate the email with the word sereta
                const password = email + process.env.SECRET_KEY;
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(password, salt);
                // We create an instance of the user
                const newUser = new User({
                    first_name: name.split(" ")[0],
                    last_name: name.split(" ")[1],
                    user_name: email.split("@")[0],
                    profile_picture: image,
                    email,
                    password: hashedPassword,
                    token: "",
                    createGoogle: true,
                    accountConfirmed: true,
                    customer_id: customer.id,
                });
                // We save the user in the database
                user = await newUser.save();
            }

            // We generate authentication token
            const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
            // We show the authenticated user
            res.json({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                user_name: user.user_name,
                email: user.email,
                date_birth: user.date_birth,
                token,
                profile_picture: user.profile_picture
            })
        } else {
            return res.status(400).json({ error: "Invalid email" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong..." });
    }
};


module.exports = googlelogin;