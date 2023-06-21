const express = require("express");
const { User } = require("../../../../database/model/relationships");
const router = express.Router();

router.post("/create", async(req, res) => {
    const { first_name, last_name, email, password, date_birth, is_Admin } = req.body;

    const userExits = await User.findOne({ where: { email } });

    //validar que el email no este registrado
    if (userExits) {
        return res.status(400).json({ message: "El email ya esta registrado" });
    }

    //todos los campos son obligatorios
    if (!first_name || !last_name || !email || !password || !date_birth) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    //validar que el email sea un email
    if (!email.includes("@")) {
        return res.status(400).json({ message: "El email no es valido" });
    }
    //validar que el password tenga al menos 8 caracteres
    if (password.length < 8) {
        return res.status(400).json({ message: "El password debe tener al menos 8 caracteres" });
    }
    //validar que el password tenga al menos una mayuscula
    if (!password.match(/[A-Z]/)) { 
        return res.status(400).json({ message: "El password debe tener al menos una mayuscula" });
    }

    //ingresar el usuario en la base de datos
    const user =  new User({
        first_name,
        last_name,
        email,
        password,
        date_birth,
        is_Admin
    })

   await user.save()
    res.status(201).json({status: 201, message:"Usuario creado correctamente", data:user})

})

router.get("/user", async(req, res) => {
    //buscar los usuarios en la base de datos
    const users = await User.findAll({})
    //si no hay usuarios
    if (!users) { 
        return res.status(400).json({ message: "No hay usuarios" });
    }

    res.status(200).json({status: 200, message:"Usuarios encontrados", data:users})
})




module.exports = router;