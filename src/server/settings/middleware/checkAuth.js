const jwt = require("jsonwebtoken");
const User = require("../../../database/model/user.model");

// Middleware for data authorization
const verifyToken = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            // console.log(token)

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.usuario = await User.findByPk(decoded.id)

            return next()
        } catch (error) {
            return res.status(404).json({ status: 404, error: 'Hubo un error' })
        }
    }

    if (!token) {
        const error = new Error('Token no valido')
        return res.status(401).json({ status: 401, error: error.message })
    }

    next();
}

// User must be an admin
const admin = async (req, res, next) => {
    if (!req.usuario.dataValues.is_Admin) {
        return res.status(401).json({ status: 401, error: 'No tienes permisos para realizar esta acción' })
    }
    next();
};

module.exports = { verifyToken, admin };