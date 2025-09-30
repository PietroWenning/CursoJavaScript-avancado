//              -5      -4      -3        -2      -1
//             0        1          2       3       4
const nomes =['Maria','Pedro','Eduardo','Joao', 'Gabriel']
//nomes.splice(indice,delete,ele1,elem2,elem3);
//Adicionar, Remover Ou Substituir elementos.
const removidos =nomes.splice(0, 0,'Pietro', 'Arthur')
console.log(nomes, removidos)