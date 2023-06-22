const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const emailRegistro = async (datos) => {
    const {email,first_name,token} = datos;
    console.log(email,first_name,token)

    const transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });

      await transport.sendMail({
        from:'"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
        to: email,
        subject: 'Confirma Tu Cuenta',
        text: 'Comprueba tu cuenta en Sommelier',
        html:`<P>Hola: ${first_name} Comprueba tu cuenta en Sommelier</P>
        <p>Tu cuenta ya esta casi lista solo debes comprobarla en el siguiente enlace:</p>
        <a href="${process.env.BACKEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        <p>Si tu no confirmaste tu cuenta, puedes ignorar el mensaje</p>
        `
      })
}


const emailOlvidePassword = async (datos) => {
  const {email,first_name,token} = datos;
  //TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
    });

    const info = await transport.sendMail({
      from:'"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
      to: email,
      subject: 'Sommelier - Restablece tu Contraseña',
      text: 'Restablece tu Contraseña',
      html:`<P>Hola: ${first_name} has solicitado reestablecer tu contraseña en Sommelier</P>
      <p>Sigue el siguinete enlace para generar un nueva contraseña:</p>
      <a href="${process.env.BACKEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      `
    })
}

module.exports = {emailRegistro,emailOlvidePassword}