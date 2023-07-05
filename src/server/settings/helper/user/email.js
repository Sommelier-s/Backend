const nodemailer = require('nodemailer')
require('dotenv').config();

//Envia un email para confirmar la cuenta
const emailRegistro = async (datos) => {
  const { email, first_name, last_name, token } = datos;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Confirmación de cuenta</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${first_name} ${last_name} somos el equipo de desarrolladores de Sommelier's Oficial, se ha intentado iniciar sesión con este email ${email}, queremos comprobar la misma, por favor haz click en el boton. Si tu no solicitaste este email, puedes ignorar el mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}/auth/confirmar/${token}" target="_blank">Confirmar cuenta</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;

  await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Confirma Tu Cuenta',
    text: 'Comprueba tu cuenta en Sommelier',
    html: `${contentHTML}`
  })
}

//Envia un email para reestablecer la contraseña
const emailOlvidePassword = async (datos) => {
  const { email, first_name, last_name, token } = datos;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Reestablecer contraseña</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${first_name} ${last_name} somos el equipo de desarrolladores de Sommelier's Oficial, se ha intentado cambiar la contraseña con este email ${email}, queremos comprobar que eres tú, por favor haz click en el boton. Si tu no solicitaste este email, puedes ignorar el mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}/reset_password_two/${token}" target="_blank">Reestablecer Contraseña</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;



  const info = await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Sommelier - Restablece tu Contraseña',
    text: 'Restablece tu Contraseña',
    html: `${contentHTML}`
  })
}

//Envia un email notificando el usuario a sido baneado
const sendBannedEmail = async (datos) => {
  const { email, name } = datos;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Usuario Deshabilitado</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${name} somos el equipo de desarrolladores de Sommelier's Oficial, se notifica que ha sido deshabilitado con este email: ${email}, de la pagina de Sommerlier's Oficial por incumplir con los <a heref="www.youtube.com" target="_blank" style="text-decoration: none; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;" >Terminos y condiciones</a> haga click en el boton para notificar que leyó este mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}" target="_blank">He sido notificado</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;



  const info = await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Sommelier - Cuenta inhabilitada',
    text: 'Cuenta inhabilitada',
    html: `${contentHTML}`
  })
}


//Envia un email notificando el usuario a sido desbaneado

const sendUnbanEmail = async (datos) => {
  console.log("Email de desbaneo: ", datos);
  const { email, name } = datos;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Usuario Habilitado</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${name} somos el equipo de desarrolladores de Sommelier's Oficial, se notifica que ha sido habilitado con este email: ${email}, en la pagina de Sommerlier's Oficial por lo que ya puede acceder con normalidad, haga click en el boton para notificar que leyó este mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}" target="_blank">He sido notificado</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;


  const info = await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Sommelier - Cuenta habilitada',
    text: 'Cuenta habilitada',
    html: `${contentHTML}`
  })
}


//Envia un email notificando que ha sido promocionado a administrador

const sendEmailForJobPromotionEmail = async (datos) => {
  const { email, name } = datos;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Promovido a Administrador</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${name}somos el equipo de desarrolladores de Sommelier's Oficial, se te a promovido como Administrador con este email: ${email} en la pagina de Sommerlier's Oficial, por lo que tendrás acceso a las herramientas de la misma, haz click en el boton para saber que leiste este mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}" target="_blank">He sido notificado</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;



  const info = await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Sommelier - Promoción de puesto',
    text: 'Promoción de puesto',
    html: `${contentHTML}`
  })
}

//Envia un email notificando que ha sido bajado como administrador

const sendUnsubscribeEmail = async (datos) => {
  const { email, name } = datos;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });


  contentHTML = `
    <div style="width: 700px; height: auto; background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 20%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dzuenswtl/image/upload/v1688403517/SommeliersImagesSystem/Logo_Negro_p7crhl.webp" title="Logo Sommeliers"/>
            </div>
            <div style=" width: 75%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Degradado de Administrador</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${name}somos el equipo de desarrolladores de Sommelier's Oficial, se te a degradado el acceso como Administrador con este email: ${email} en la pagina de Sommerlier's Oficial, por lo que no tendrás acceso a las herramientas de la misma, haz click en el boton para saber que leiste este mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: #c1121f; cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;" href="${process.env.BACKEND_URL}" target="_blank">He sido notificado</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://sommeliers-oficial.vercel.app" target:"_blank" >Sommelier's</a> </p>
        </div>
    </div>
    `;


  const info = await transport.sendMail({
    from: '"Sommelier - Administrador de cuentas" <cuentas@Sommelier.com>',
    to: email,
    subject: 'Sommelier - Degradado de cargo',
    text: 'Degradado de cargo',
    html: `${contentHTML}`
  })
}


module.exports = { emailRegistro, emailOlvidePassword, sendBannedEmail, sendUnbanEmail, sendEmailForJobPromotionEmail, sendUnsubscribeEmail }