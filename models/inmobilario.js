const mongoose = require('mongoose');

const itemInmobilariodSchema = new mongoose.Schema({
    codigo: {
        type: String
    },
    title: {
        type: String
    },
    descripcion: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    sector: {
        type: String
    },
    tipoInmueble: {
        type: String
    },
    habitaciones: {
        type: String
    },
    banos: {
        type: String
    },
    parqueos: {
        type: String
    },
    tamanoTerreno: {
        type: String
    },
    comodidades: {
        type: Array
    },
    nivel: {
        type: String
    },
    edificable: {
        type: String
    },
    anoConstruccion: {
        type: String
    },
    usoActual: {
        type: String
    },
    operacion: {
        type: String
    },
    precio: {
        type: String
    },
    userId: {
        type: String
    },
    telefono: {
        type: String
    },
    whatsapp: {
        type: String
    },
    imgPrincipal: {
        type: String
    },
    img1: {
        type: String
    },
    img2: {
        type: String
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    img5: {
        type: String
    },
    img6: {
        type: String
    },
    img7: {
        type: String
    },
    img8: {
        type: String
    },
    img9: {
        type: String
    },
    img10: {
        type: String
    },
    
})

module.exports = itemInmobilario = mongoose.model('itemInmobilario', itemInmobilariodSchema);