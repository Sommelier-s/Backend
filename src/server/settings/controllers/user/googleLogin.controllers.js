const dotenv = require("dotenv");
const { generarJWT } = require("../../helper/user/generarJWT");
const User = require("../../../../database/model/user.model");
dotenv.config();


// Enponit login Google
const googlelogin = async (req, res) => {
    try {
        let user = await User.findOne({ where: { googleId: req.user.id } });
        if (!user) {
          const newUser = new User({
            first_name: req.user.name.givenName,
            last_name: req.user.name.familyName,
            profile_picture: req.user.photos[0].value,
            password: req.user.id,
            googleId: req.user.id,
            createGoogle: true,
            accountConfirmed: true,
            token: "",
          });
          user = await newUser.save();
        }
        res.status(200).json({
          user: {
            first_name: user.first_name,
            last_name: user.last_name,
            profile_picture: user.profile_picture,
            token: generarJWT(user.id)
          },
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error en el servidor" });
      }
 
};


module.exports = googlelogin;