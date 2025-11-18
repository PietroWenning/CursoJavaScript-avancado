fetch('pessoas.json')
 .then(resposta => resposta.json())
 .then(json => carregaElementosNaPagina())

 function carregaElementosNaPagina(){
    for(let pessoa of json){
        console.log(pessoa.nome)
    }
 }