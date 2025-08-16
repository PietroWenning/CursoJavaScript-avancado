function zeroAesquerda (num){
    return num >=10 ? num : `0${num}`
}
function formatadata(data){
    const dia = data.getDate()
    const mes = data.getMonth() +1
    const ano = data.getFullYear()
    const hr = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()

    return`${dia}/${mes}/${ano} ${hr}:${min}:${seg}`
}
const data = new Date()
const dataBrasil = formatadata(data)
console.log(dataBrasil)