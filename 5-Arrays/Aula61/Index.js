const numeros =[5,80,50,1,2,3,4,5,6,8,9,11,15,18,22,27]
const numerosEmDobro =numeros.map(valor => valor *2);
//console.log(numerosEmDobro)



const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 15 },
  { nome: "Carlos", idade: 25 },
  { nome: "Amanda", idade: 17 },
  { nome: "Jose", idade: 18 },
  { nome: "Angela", idade: 20 }
];
const nome = pessoas.map(obj => obj.nome)
const idade = pessoas.map(obj => ({ idade: obj.idade }))
const comIds = pessoas.map((obj, indice) => {
    const newObj= {...obj}
    newObj.id =indice
    return newObj
})
console.log(comIds)
console.log(pessoas)