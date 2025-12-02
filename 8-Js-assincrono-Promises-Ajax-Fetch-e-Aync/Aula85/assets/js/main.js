fetch('pessoas.json')
 .then(resposta => resposta.json())
 .then(json => carregaElementosNaPagina(json))

 function carregaElementosNaPagina(json){
    const table = document.createElement('table')
    for(let pessoa of json){
        const tr = document.createElement('tr')
        console.log(pessoa.idade)
    }
 }