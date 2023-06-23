const bcrypt = require("bcrypt");
const generarIdToken = require("../../helper/user/generarToken");
const User = require("../../../../database/model/user.model");
const { emailRegistro } = require("../../helper/user/email");

// PostUser Controller
const registroUser = async (req, res) => {
  try {
    // Obtener los datos que llegan en el cuerpo de la solicitud
    const { first_name, last_name, date_birth, email, password } = req.body;

        // Validar que el usuario tenga más de 18 años
        let fechaNacimiento =  new Date(date_birth);
        let fechaActual = new Date();
        let edad =  fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        let dia =  fechaActual.getDate() - fechaNacimiento.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
           edad--;
        }
        if (edad < 18) {
          return res.status(406).json({
            status: 406,
            message: "You must be over 18 years old to register",
          });
        }

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const emailVerify = await User.findOne({
      where: {
        email: email,
      },
    });

    // Si el usuario ya existe, retornamos un error
    if (emailVerify) {
      return res.status(406).json({
        status: 406,
        message: "Email already exists",
      });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    // Crear usuario en la base de datos
    const user = new User({
      first_name,
      last_name,
      date_birth,
      email,
      password: hashedPassword,
    });

    // Generar el token
    user.token = generarIdToken();

    // Guardar el usuario en la base de datos
    await user.save();

    // Enviar correo electrónico
    await emailRegistro(user);

    res.status(201).send({
      status: 201,
      message: "User created successfully",
    });
  } catch (error) {
    // Retornar el mensaje de error
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = registroUser;
