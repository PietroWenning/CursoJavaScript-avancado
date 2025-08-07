/* Primiticos(imutaveis) -string, number, boolean, undefined,null(bigint, symbol)- valores copiados*/ 
/*let nome = 'Luiz'; 
nome[0] = 'P';
console.log(nome[0], nome); // Pietro

let a = 'A'; // string
let b = a; // b recebe o valor de a(Copia)
console.log(a, b); // A A  

a = 'Outra coisa'; // a recebe outro valor
console.log(a, b); // Outra coisa A*/


/* Referencia(mutavel) - array, object, function - passados por referencia (apontam para o mesmo lugar na memoria)
/*
let a = [1, 2, 3]; // array
let b = [...a]; // b recebe uma copia de a (spread operator)
console.log(a, b); // [1, 2, 3] [1, 2, 3]

a.push(4); // altera o valor do array a
console.log(a, b); // [1, 2, 3, 4] [1, 2, 3, 4]
b.pop(); // altera o valor do array 
console.log(a, b); // [1, 2, 3] [1, 2, 3]  */

let a = { nome: 'Luiz', 
};
let b = {...a}; // b recebe uma copia de a (spread operator)
a.nome = 'Pietro';
console.log(a, b); // { nome: 'Luiz' } { nome: 'Luiz' }