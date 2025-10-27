const InputTarefa = document.querySelector('.input-tarefa');
const BtnAddTarefa = document.querySelector('.btn-add-tarefa');
const ListaTarefas = document.querySelector('.lista-tarefas');
function criarLi(){
    const li = document.createElement('li');
    return li;
}
function criartarefa(tarefa){
    const li = criarLi();
    li.innerText = tarefa;
    ListaTarefas.appendChild(li);
    console.log(li);
    limpaInput();
    BtnApagar(li);
    salvarTarefas();
}
InputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!InputTarefa.value) return;
        criartarefa(InputTarefa.value);
    }
});
function BtnApagar(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);

}

function limpaInput(){
    InputTarefa.value = '';
    InputTarefa.focus();
}

BtnAddTarefa.addEventListener('click', function(){  
    if(!InputTarefa.value) return;
    criartarefa(InputTarefa.value);
});
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
function salvarTarefas(){
    const liTarefas = ListaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){ 
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); 
    for(let tarefa of listaDeTarefas){
        criartarefa(tarefa);
    }
}   
adicionarTarefasSalvas();
//localStorage.clear();
//JSON.parse() converte JSON para objeto
//JSON.stringify() converte objeto para JSON
//localStorage.setItem('chave', 'valor') cria um item no localStorage
//localStorage.getItem('chave') pega o valor de uma chave no localStorage
//localStorage.removeItem('chave') remove um item do localStorage
//localStorage.clear() limpa todo o localStorage
//localStorage.length retorna o número de itens no localStorage
//localStorage.key(n) retorna a chave na posição n do localStorage
//localStorage é um objeto que permite armazenar dados no navegador
//localStorage é persistente, ou seja, os dados permanecem mesmo após o fechamento do navegador
//sessionStorage é um objeto que permite armazenar dados no navegador por sessão
//sessionStorage é temporário, ou seja, os dados são removidos após o fechamento do navegador
//Cookies são pequenos arquivos de texto armazenados no navegador
//Cookies são enviados ao servidor a cada requisição
//Cookies têm data de expiração
//Cookies podem ser acessados por JavaScript
//Cookies podem ser usados para armazenar preferências do usuário
