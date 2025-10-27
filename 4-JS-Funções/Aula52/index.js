(function(idade, peso, altura){
    const sobrenome = 'Miranda'
    function criaNome(nome){
        return nome + ' '+ sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'))
    }
    falaNome()
    console.log(idade, peso, altura)

})(15, 56, 1.75);

