const Pessoa = {
    nome:'Pietro',
    sobrenome:'Calebe',
    Idade:'15'
}
// for( let indice in frutas){
//     console.log(frutas[indice])
// }
for(let chaves in Pessoa){
    console.log(chaves, Pessoa[chaves])
}