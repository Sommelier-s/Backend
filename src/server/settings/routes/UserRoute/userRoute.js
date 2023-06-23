// Third Party Dependencies.
const { Router } = require("express");
// Local Dependencies.
// const verifyToken = require("../middleware/user/jwt");
const registroUser = require("../../controllers/user/register.controllers");
const login = require("../../controllers/user/login.controllers");
// const googlelogin = require("../controllers/user/googleLogin.controllers");
const confirmar = require("../../controllers/user/confirmAccount.controllers");
const olvidePasswordUser = require("../../controllers/user/forgetPassword.controllers");
const comprobarToken = require("../../controllers/user/findOutToken.controllers");
const nuevoPassword = require("../../controllers/user/newPassword.controllers");
const updateUser = require("../../controllers/user/updateUser.controllers");
const deleteUser = require("../../controllers/user/deleteUser.controllers");

// Router Instance.
const userRoutes = Router();

// Register Users.
userRoutes.post("/register", registroUser);
// Start section after registration
userRoutes.post("/login", login);
// Confirm account after registration
userRoutes.get("/confirmar/:token", confirmar);
// Authenticate with google login
// userRoutes.post("/googlelogin",  googlelogin);
// Password recovery send email for recovery
userRoutes.post("/olvide-password", olvidePasswordUser);
// Enter password the new password with valid token
userRoutes.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
//update user account
userRoutes.put("/update-user/:id", updateUser)
// delete user account
userRoutes.delete("/delete-user/:id", deleteUser)


module.exports = userRoutes;