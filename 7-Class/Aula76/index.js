class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    } comer(){
        console.log(`${this.nome} está comendo`)
    } beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
const pessoa1 = new Pessoa('Pietro', 'Calebe ')
const pessoa2 = new Pessoa('Maria', 'Oliveira')
pessoa1.falar()
pessoa2.comer()
pessoa1.beber()
console.log(pessoa1)
console.log(pessoa2)