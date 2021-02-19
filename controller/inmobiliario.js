const itemInmobilario = require('../models/inmobilario')

exports.createInmobilario = async (req, res, next) => {
    const { title, descripcion, address, city, sector, tipoInmueble, habitaciones, banos, parqueos, tamanoTerreno, comodidades, nivel, edificable, anoConstruccion, usoActual, operacion, precio, userId, telefono, whatsapp } = req.body;
    
    try {
        const response = await itemInmobilario.create({
        title,
        descripcion,
        address,
        city,
        sector,
        tipoInmueble,
        habitaciones,
        banos,
        parqueos,
        tamanoTerreno,
        comodidades,
        nivel,
        edificable,
        anoConstruccion,
        usoActual,
        operacion,
        precio,
        userId,
        telefono,
        whatsapp
        })

        res.status(200).json({ msg: 'Guardado correctamente!' })
        console.log(response)
    } catch (err) {
        return res.status(400).json({
            error: err
        }),
        console.log('SE HA PRESENTADO EL SIGUIENTE ERROR:', err)
    }
}

exports.uploadImage = async (req, res) => {
    itemInmobilario.findByIdAndUpdate({ _id: req.params._id }, req.body)
        .then(function () {
            itemInmobilario.findOne({ _id: req.params._id })
                .then(function (data) {
                res.status(200).json({ data })
            })
    })
}

exports.viewInmobiliario = async (req, res) => {
    const inmobiliario = await itemInmobilario.findById(req.params)
    res.status(200).json({ inmobiliario })
}


exports.viewData = async (req, res) => {
    itemInmobilario.find({})
        .then(function (data) {
        res.json(data)
    })
}