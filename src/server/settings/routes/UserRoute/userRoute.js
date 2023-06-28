// Third Party Dependencies.
const { Router } = require("express");
const passport = require("passport");
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
const getAllUser = require("../../controllers/user/getAllUser.controller");
const getUserById = require("../../controllers/user/getByIdController");
const { admin, verifyToken } = require("../../middleware/checkAuth");
const googlelogin = require("../../controllers/user/googleLogin.controllers");

// Router Instance.
const userRoutes = Router();

const CLIENT_URL = "http://localhost:3000/";

// Register Users.
userRoutes.post("/register", registroUser);
// Start section after registration
userRoutes.post("/login", login);
// Confirm account after registration
userRoutes.get("/confirmar/:token", confirmar);

// Authenticate with google login
// userRoutes.post("/googlelogin",  googlelogin);
userRoutes.get("/login/success", googlelogin);

userRoutes.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

userRoutes.get("/logout", (req, res) => {
  const data = (req.user = null);
  console.log(data);
  res.redirect(CLIENT_URL);
});

userRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

userRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Password recovery send email for recovery
userRoutes.post("/olvide-password", olvidePasswordUser);
// Enter password the new password with valid token
userRoutes
  .route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword);

//get user account

userRoutes.get("/user", getAllUser)

//getID user account
userRoutes.get("/user/:id", verifyToken, admin, getUserById);
//update user account
userRoutes.put("/update-user/:id", verifyToken, admin, updateUser);
// delete user account
userRoutes.delete("/delete-user/:id", verifyToken, admin, deleteUser);

// profile user
userRoutes.get("/profile");

module.exports = userRoutes;
