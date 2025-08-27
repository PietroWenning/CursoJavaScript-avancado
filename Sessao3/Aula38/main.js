const paragrafo = document.querySelector('.paragrafo')
const ps = paragrafo.querySelectorAll('p')

const estilosBody =getComputedStyle(document.body)
const backgroudcolorbody =estilosBody.backgroundColor
console.log(backgroudcolorbody)
for(let p of ps){
    p.style.backgroundColor = backgroudcolorbody
    p.style.color = '#FFF';
}
