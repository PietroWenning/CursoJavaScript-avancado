const pessoas =[
    {id:3, nome:'Luiz' },
    {id:2, nome:'Maria' },
    {id:1, nome:'Helena' },
];
//  const novasPessoas = {}; 
// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};  
// }
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
for(const pessoa of novasPessoas.values()){
    console.log(pessoa);
}
console.log(novasPessoas); //ordem de esternaçao vai manter a ordem de inserção
console.log(novasPessoas.get(2)); //acessar o item com a chave 2