
const elementos=[
    { tag: 'p',texto: 'Frase1'},
    {tag: 'div',texto: 'frase2'},
    {tag: 'footer',texto:'frase3'},
    {tag: 'section',texto:'frase4'}
]
const container = document.querySelector('.container')
const div = document.createElement('div')
 for (let a = 0 ; a < elementos.length; a++){
  let {tag, texto} = elementos[a];
  let tagCriada = document.createElement(tag)
  let textocriado =document.createTextNode(texto)
  tagCriada.appendChild(textocriado)
  div.appendChild(tagCriada)
 }
 container.appendChild(div)