//Filter, Map, Reduce

const numeros =[5,80,50,1,2,3,4,5,6,8,9,11,15,18,22,27]
const numerosFiltrados = numeros.filter(valor => valor> 50 )
console.log(numerosFiltrados)


const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 15 },
  { nome: "Carlos", idade: 25 }
];

// Filtrar pessoas maiores de 18 anos
//Nomes que termina com A
const maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
const nomeTerminaA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a'); 
})
console.log(maiores);
console.log(nomeTerminaA)

