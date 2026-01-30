const express = require('express')
const route =  express.Router()
const homeController = require('./src/controllers/homecontrollers')
const contatoController = require('./src/controllers/contatoController')

function meuMiddlewares(req, res, next){
    req.session = {nome:'pietro', sobrenome:'calebe',}
    console.log()
    console.log('passei no seu middleware')
    next()
}

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

route.post('/contato', contatoController.paginaInicial)

module.exports = route