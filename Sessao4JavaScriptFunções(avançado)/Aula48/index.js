
//argumetos que sustenta todos os argumentos enviados
// function funcao(a,b,c,d,e,f){
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento
//     }
//     console.log(total, a,b,c,d,e,f)
// }
// funcao( 1,2,3,4,5,6,7,8,9,10)
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }
// funcao( {nome: 'Pietro', sobrenome:'Calebe', idade: 16})
// function conta(operador, acumulador, ...numeros){
//     for(let numero of numeros){
//         if(operador === '+') acumulador += numero
//         if(operador === '-') acumulador -= numero
//         if(operador === '/') acumulador /= numero
//         if(operador === '*') acumulador *= numero
//     }
//     console.log(acumulador)
// }

// conta('+', 0, 20,30,40,50)
// conta('*', 1, 20,30,40,50)
// conta('-', 100, 20,30,40,50)
// conta('/', 100000, 20,2,5,10)
// conta('/', 100000, 2,2,5,10)
const conta = (...args)=>{
    console.log(args)
}
conta('+', 1,20,30,40,50)