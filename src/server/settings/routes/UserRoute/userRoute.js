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
const getAllUser = require("../../controllers/user/GetAllUserCotroller");
const getUserById = require("../../controllers/user/getByIdController");
const { admin, verifyToken } = require("../../middleware/checkAuth");

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

//get user account
userRoutes.get("/user", getAllUser)
//getID user account
userRoutes.get("/user/:id", verifyToken, admin, getUserById)
//update user account
userRoutes.put("/update-user/:id", updateUser) //!Hackeo validacion para poder setear el primer user como admin
// userRoutes.put("/update-user/:id", verifyToken, admin, updateUser) //! descomentar para volver a realizar validaciones
// delete user account
userRoutes.delete("/delete-user/:id", deleteUser) //!Hackeo validacion para poder setear el primer user como admin
// userRoutes.delete("/delete-user/:id", verifyToken, admin, deleteUser) //! descomentar para volver a realizar validaciones

module.exports = userRoutes;