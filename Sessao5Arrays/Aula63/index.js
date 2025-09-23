const numeros =[5,80,50,1,2,3,4,5,6,8,9,11,15,18,22,27]
const soma = numeros.filter(valor => valor %2 ===0 ).map(valor => valor*2).reduce((acumulador, valor) => acumulador +valor)
console.log(soma)