const express = require('express')
const route =  express.Router()
const homeController = require('./constrollers/homecontrollers')
const contatoController = require('./constrollers/contatoController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

route.post('/contato', contatoController.paginaInicial)

module.exports = route