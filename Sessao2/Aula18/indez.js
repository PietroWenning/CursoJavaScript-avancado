/*function CriarPessoa(nome, idade) {
    return {
     nome,
     idade  }}

     const pessoa = CriarPessoa('Pietro', 25);
     console.log(pessoa);*/

     const pessoa1 = {
        nome : 'Pietro',
        idade: 15,
        profissao: 'Programador',
        fala(){
            return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
        },
        incrementaIdade() {
            this.idade++;
        }
     }
     console.log(pessoa1.fala());