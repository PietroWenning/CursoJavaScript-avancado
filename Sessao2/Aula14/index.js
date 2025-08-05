let num1 =0.7;//number
let num2 = 0.1;//number
num1 = ((num1 * 100) + (num2 * 100)) / 100; // Arredonda a soma para evitar problemas de precisão
console.log(num1); // 0.8
//console.log(num1.toString() + num2); // Converte ambos para string e concatena
//console.log(num1.toString(2)); // Converte num1 para binário e concatena com num2
//console.log(num1.toFixed(2)); // Arredonda num1 para 2 casas decimais
console.log(Number.isInteger(num1)); // Verifica se num1 é um inteiro
//let temp = num1 * 'Ola!'; // Multiplica num1 por uma string, resultando em NaN
//console.log(Number.isNaN(temp)); // Verifica se num1 é NaN (Not a Number)
