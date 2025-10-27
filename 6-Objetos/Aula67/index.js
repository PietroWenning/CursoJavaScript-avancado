//defineProperty - defineProperties

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, 'estoque',{
        enumerable:true,//mostra a chave
        configurable:true, // configuravel
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Está incorreto o valor!')
            }
            estoqueprivado = valor
        }
    })
}
function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor= valor.replace('coisa.', '')
            nome=valor
        }
    }
}
const p1 =new Produto('Camiseta',20,3)
const p2 =criaProduto('Camiseta')
p2.nome ='Qualquer coisa.'
console.log(p2.nome)
//console.log(p1.estoque)