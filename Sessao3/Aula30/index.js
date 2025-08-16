   const data = new Date ()
    const h1 = document.querySelector('.container h1')
function getDatasemanames(diasemana){
    const diassemanas =['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    return diassemanas [ diasemana];
    }
    function getNomesmes(numeroMes){
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro ' , 'dezembro'
        ]
        return meses[numeroMes]
    }
    function zeroAesquerda(num){
        return num >= 10 ? num : `0${num}`
    }
    function criarData (data){
        const diaSemana = data.getDay();
        const numero = data.getMonth();

        const nomeDia = getDatasemanames(diaSemana)
        const nomeMes = getNomesmes (numero)
 return(
    `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
    ` de ${data.getFullYear()}` +
    ` ${zeroAesquerda (data.getHours())}:${zeroAesquerda(data.getMinutes())}`
 )
    }
h1.innerHTML = criarData(data)