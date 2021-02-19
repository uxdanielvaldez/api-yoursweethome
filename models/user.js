const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    rol: {
        type: String
    },
    fechaDeRegistro: {
        type: String
    }
},
    { collection: 'user' }
)

const model = mongoose.model('UserSchema', UserSchema);
module.exports = model;