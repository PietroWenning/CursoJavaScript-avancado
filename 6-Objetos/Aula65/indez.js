//Factory Function / Constructor Functions / Classes
function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p2 =criaPessoa('Pietro', 'Calebe')
console.log(p2.nomecompleto)

function Pessoa(nome,sobrenome){
    this.nome =nome;
    this.sobrenome=sobrenome;
    Object.freeze(this)
}
//{} <-this ->this atrela no obj o new
const p1 = new Pessoa('Pietro', 'Calebe')
p1.nome = 'Amanda'
console.log(p1)