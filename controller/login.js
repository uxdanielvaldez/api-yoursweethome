const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const User = require('../models/user')

const JWT_SECRET = 'ssafarq34aksbdfoib2o3ufoqwbqwrfo*)&(ˆ*&&ˆ**&ˆ*kjnskhfkjsfaisdf'

exports.Login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username }).lean()

    if (!user) {
        return res.status(400).json({ error: 'Usuario/Contraseña incorrectos' })
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, JWT_SECRET)
        return res.status(200).json({ status: 200, message: 'Inicio de sesión exitoso', jwt: token, username: user.username, user: user.nombre + ' ' + user.apellido, rol: user.rol, id: user._id })
        
    }

    res.status(400).json({ error: 'Usuario o Contraseña Incorrecto' })
}