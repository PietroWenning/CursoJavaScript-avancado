const formById = document.querySelector("#formulario") // by ID

// Example form handling
formById.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputpeso = e.target.querySelector('#peso')
   const inputaltura = e.target.querySelector('#altura')

   const peso = Number(inputpeso.value)
   const altura = Number(inputaltura.value)

   if(!peso){
    setResultado('Peso Inválido', false)
    return
   }
   if(!altura){
    setResultado('Altura Inválido', false)
    return
}
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu imc é  ${imc} (${nivelImc}).`
    setResultado(msg, true)
    console.log(msg)
})
function getNivelImc(imc){
      const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']; 

    if (imc >= 39.9) return nivel [5] 
    if (imc >= 34.9) return nivel [4]     
    if (imc >= 29.9) return nivel [3] 
    if (imc >= 24.9) return nivel [2] 
    if (imc >= 18.9)return nivel [1] 
    if (imc >= 0)return nivel [0] 
}
function getImc(peso, altura){
    const imc = peso/altura ** 2
    return imc.toFixed(2)
}
function Criap(){
 const p =document.createElement('p')
 return p
}
 function setResultado (msg, isvalid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML= ''
    const p =Criap ()
if(isvalid){
    p.classList.add('paragrafo-resultado')
}
else{
    p.classList.add('bad')
}
p.innerHTML = msg;
    resultado.appendChild(p)
 }
