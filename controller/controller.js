const UserSubscribe = require('../models/userSub')



exports.home = async (req, res) => {
    res.json({ message: 'API working!' })
    console.log('API working!')
}

exports.UserSubscribe = async (req, res) => {
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
}


