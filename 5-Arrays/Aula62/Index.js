const numeros =[5,80,50,1,2,3,4,5,6,8,9,11,15,18,22,27]
const total = numeros.reduce((acumulador, valor)=>{
    if(valor % 2 ===0 ){
        acumulador += valor
    }
    if(valor % 2 ===0 )acumulador.push(valor)
  acumulador.push(valor *2)
    return acumulador
},0)
console.log(total)














const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 15 },
  { nome: "Carlos", idade: 25 },
  { nome: "Amanda", idade: 17 },
  { nome: "Jose", idade: 18 },
  { nome: "Angela", idade: 20 }
];
const maisVelha =pessoas.reduce(function(acumulador, valor){
     if(acumulador.idade >valor.idade) return acumulador;  
     return valor                                                              
});
console.log(maisVelha)