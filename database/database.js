const mongoose = require('mongoose');
const config = require('../config');

const Connect = async () => {
    try {
        const con = await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        
        console.log(`MongoDB Connectd: ${con.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect;