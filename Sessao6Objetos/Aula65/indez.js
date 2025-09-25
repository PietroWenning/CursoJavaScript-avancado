//Factory Function / Constructor Functions / Classes
// function criaPessoa(nome,sobrenome){
//     return{
//         nome,
//         sobrenome,
//         get nomecompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }
// const p1 =criaPessoa('Pietro', 'Calebe')
// console.log(p1.nomecompleto)

function Pessoa(nome,sobrenome){
    this.nome =nome;
    this.sobrenome=sobrenome;
}
//{} <-this ->this atrela no obj o new
const p1 = new Pessoa('Pietro', 'Calebe')
console.log(p1)