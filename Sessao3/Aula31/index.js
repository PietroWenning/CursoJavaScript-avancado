const verdadeira = true;
//let tem escopo de bloco { ... bloco}
//var só tme escopo de função 


let nome = 'Pietro'//criando
var nome2 ='Pietro'

if(verdadeira){
    let nome = 'Calebe'//criando 
    //console.log(nome, nome2)
    if(verdadeira){
        let nome = 'outra coisa'
        console.log(nome, nome2)
    }
}