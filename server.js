const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const morgan = require('morgan');

const UserSubscribe = require('./models/userSub');

const app = express();
app.use(morgan(':method :url :status :response-time ms'));
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://167.172.140.55:27017/yoursweethome', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})

app.listen(3000, () => {
    console.log('Server up at port 3000')
})


// POST //

app.post('/api/usersubscribe', async (req, res) => {
    const { email, nombre } = req.body;

    try {
        const response = await UserSubscribe.create({
            email,
            nombre
        })

        res.status(200).json({
            response
        })
        console.log(response)

    } catch (err) {
        return res.status(400).json({
            message: err
        }),
        console.log('SE HA PRESENTADO EL SIGUIENTE ERROR:', err)
    }
})
app.options('*', cors())
