const numero =Number( prompt("Digite um número: "));
document.body.innerHTML = `<h1> Seu Numero- ${numero}</h1>`;
document.body.innerHTML += `<p> Raiz Quadrada -${numero ** 0.5}</p>`;
document.body.innerHTML += `<p> É Inteiro - ${Number.isInteger(numero)}</p>`;
document.body.innerHTML += `<p> É NaN - ${Number.isNaN(numero)}</p>`;
document.body.innerHTML += `<p> Arredondar para Baixo - ${Math.floor(numero)}</p>`;
document.body.innerHTML += `<p> Arredondar para cima - ${Math.ceil(numero)}</p>`;
document.body.innerHTML += `<p> Arredondar- ${Math.round(numero)}</p>`;
