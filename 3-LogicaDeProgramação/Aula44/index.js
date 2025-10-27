//Tratando setInterval setTimeout
function MostrarHora(){
    let data =new Date()
return data.toLocaleTimeString('pt-Br',{
        hour12:false
    });
}
const timer = setInterval(function(){
    console.log(MostrarHora());
}, 1000);
setTimeout(function(){
    clearInterval(timer)
}, 3000)
setTimeout(function(){
    console.log('Olá Mundo')
}, 5000)