const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DeLETE
//         POST    GET      PUT   m DELETE
//http://meusite.com/ <- GET -> Entregue a página.

app.get('/', (req, res) => {
        res.send(`<form action="/" method="POST">
            nome: <inpuit type="text" name="nome"
            <button> enviar</button>
            </form>
            `)
})
app.post('/', (req, res)=>{
    res.send('recebi o formulario')
})
app.get('/contato', (req, res)=>{
    res.send('Obrigado por entrar em contato com a gente.')
})
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Seu servidor esta rodando na porta 3000')
})