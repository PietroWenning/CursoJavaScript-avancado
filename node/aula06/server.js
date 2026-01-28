const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DeLETE
//         POST    GET      PUT   m DELETE
//http://meusite.com/ <- GET -> Entregue a página.

app.get('/', (req, res) => {
        res.send('Hello Word')
})
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Seu servidor esta rodando na porta 3000')
})