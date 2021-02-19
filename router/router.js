const route = require('express').Router();
const controller = require('../controller/controller')
const controllerRegister = require('../controller/register')
const controllerLogin = require('../controller/login')
const controllerInmobiliario = require('../controller/inmobiliario')


route.get('/', controller.home)
route.post('/api/user-subscribe', controller.UserSubscribe)
route.post('/api/register', controllerRegister.Register)
route.post('/api/login', controllerLogin.Login)
route.post('/api/create-inmobilario', controllerInmobiliario.createInmobilario)
route.put('/api/upload-image/:_id', controllerInmobiliario.uploadImage)
route.get('/api/view-data', controllerInmobiliario.viewData)
route.get('/api/inmobiliario/:_id', controllerInmobiliario.viewInmobiliario)

module.exports = route;