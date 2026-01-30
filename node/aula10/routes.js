const express = require('express')
const route =  express.Router()
const homeController = require('./src/controllers/homecontrollers')
const contatoController = require('./src/controllers/contatoController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

route.post('/contato', contatoController.paginaInicial)

module.exports = route