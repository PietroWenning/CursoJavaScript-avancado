const path = require('path')
const caminhoArquivos = path.resolve(__dirname, 'teste.json')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoa = [
//     {nome:'joao'},
//     {nome:'maria'},
//     {nome:'pietro'},
// ]
// const json = JSON.stringify(pessoa, '', 2)
// escrever(caminhoArquivos, json)

async function lerAquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}
 function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.foreach(val => console.log(val));

 }
 lerAquivo(caminhoArquivos)