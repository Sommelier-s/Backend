const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../../../../database/model/user.model");
const { generarJWT } = require("../../helper/user/generarJWT");
dotenv.config();


// Enponit login Google
const googlelogin = async (req, res) => {

    const { given_name, family_name, picture, email } = req.body;
    try {

        // We verify that the email is valid that it is not undefined
        if (email) {
            // We search the database that excites
            let user = await User.findOne({ where: { email } });
            // We verify it does not exist if it does not exist we save them
            if (!user) {

                // We encrypt the password and concatenate the email with the word sereta
                const password = email + process.env.JWT_SECRET;
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(password, salt);
                // We create an instance of the user
                const newUser = new User({
                    first_name: given_name,
                    last_name: family_name,
                    profile_picture: picture,
                    email: email,
                    password: hashedPassword,
                    token: "",
                    createGoogle: true,
                    accountConfirmed: true,
                });
                // We save the user in the database
                user = await newUser.save();
            }

            // We show the authenticated user
            res.json({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              date_birth: user.date_birth,
              email: user.email,
              token: generarJWT(user.id),
              profile_picture:user.profile_picture
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