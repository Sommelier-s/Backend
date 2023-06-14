// Objective: Define the routes of the application.

// Third Party Dependencies.
const { Router } = require("express");


// Router Instance.
const routes = Router();

routes.use("/user",(req,res)=>{
    res.status(200).json({message:"todo ok"});
})


module.exports = routes;