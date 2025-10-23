//Camiseta -, Caneca, Lapis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
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
function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return this._estoque;
        }
        ,
        set: function(valor){
            if (typeof valor !== 'number') return;
            this._estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
const caneca= new Caneca('Caneca de Porcelana', 15, 'Porcelana');
caneca.aumento(10);
console.log(caneca);
 const produto = new Produto('Genérica', 50);
 const camiseta1 = new Camiseta('Regata', 20, 'Preta');
 camiseta1.aumento(10);
 console.log(camiseta1);