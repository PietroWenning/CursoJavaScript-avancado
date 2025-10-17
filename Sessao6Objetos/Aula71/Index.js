//Camiseta -, Caneca, Lapis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco =+ quantia;
}
Produto.prototyope.desconto = function(quantia){
    this.preco =- quantia;
}
function  Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
 const produto = new Produto('Genérica', 50);
 console.log(produto);
 const camiseta1 = new Camiseta('Regata', 20, 'Preta');

 camiseta1.aumento(10);

 console.log(camiseta1);