const mongoose = require('mongoose');

const UserSubscribe = new mongoose.Schema({
    email: {
        type: String
    },
    nombre: {
        type: String
    }
},

    { collection: 'usersubscribe' }
    
)

const model = mongoose.model('UserSubscribe', UserSubscribe);

module.exports = model;