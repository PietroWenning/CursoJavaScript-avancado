const pessoa={
    nome:'pietro',
    sobrenome:'calebe',
    idade:'15',
    endereco:{
        rua: 'av Brasil',
        numero:'290'
    }
}
//atribuicao via desestruturacao
const {nome, ...resto} = pessoa
console.log(resto)