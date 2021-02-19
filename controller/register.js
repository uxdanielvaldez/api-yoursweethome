const bcrypt = require('bcryptjs')
const User = require('../models/user')
exports.Register = async (req, res) => {
    const { username, password: plainTextPassword, nombre, apellido, rol, fechaDeRegistro } = req.body;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({ status: 'error', error: 'Usuario Invalido' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.status(400).json({ status: 'error', error: 'Password Invalido' })
    }

    if (plainTextPassword.length < 6) {
        return res.status(400).json({ status: 'error', error: 'Password inseguro, su password debe contener mas de 6 caracteres' })
    }

    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            password,
            nombre,
            apellido,
            rol,
            fechaDeRegistro
        })
        console.log('Usuario creado:', response)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ status: 'error', error: 'ESTE USUARIO YA SE ENCUENTRA REGISTRADO' })
        }
        throw error   
    }

    res.status(200).json({msg: 'Usuario creado correctamente'})
}