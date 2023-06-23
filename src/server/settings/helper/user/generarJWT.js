const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generarJWT = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
  })
}

module.exports = {generarJWT}