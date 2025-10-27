function criaPessoa(nome, sobrenome,a, p){
    return{
        nome,
        sobrenome,
        //Getter
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift('')
            this.sobrenome =valor.join('')
        },

        Fala(assunto){
            return`${this.nome} está ${assunto}}`
        },
        altura :a,
        peso: p,

        //Getter obter o valor
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
       }
}
const p1 =criaPessoa('Pietro', 'Wenning',1.75, 56)
const p2 = criaPessoa('Joana', 'Oliveira', 1.8, 55 )
const p3 =criaPessoa('junior', 'otavio', 1.6, 110)
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
