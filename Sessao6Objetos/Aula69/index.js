function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = function(){
    //     return 'ORIGINAL' + this.nome + ' ' + this.sobrenome;
    // }
}
Pessoa.prototype.nomeCompleto2 = function(){
    return this.nome + ' ' + this.sobrenome;
}
const p1 = new Pessoa('Pietro','Calebe de Araújo Wenning');
const p2 = new Pessoa('Amanda','Matuzewski oliveira');
const p3 = new Pessoa('Sarah','Matuzewski Wenning');
console.log(p1.nomeCompleto2());
console.log(p2.nomeCompleto2());
console.log(p3.nomeCompleto2());