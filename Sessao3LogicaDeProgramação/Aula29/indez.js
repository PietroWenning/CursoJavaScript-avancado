const data = new Date('1987-04-21 00:00:00')
const diasemana = data.getDay()
let diasemanatexto;

switch(diasemana){
    case 0:
        diasemanatexto ='domingo'
        break
         case 1:
        diasemanatexto ='segunda'
        break
         case 2:
        diasemanatexto ='terça'
        break
         case 3:
        diasemanatexto ='quarta'
        break
         case 4:
        diasemanatexto ='quinta'
        break
         case 5:
        diasemanatexto ='sexta'
        break
         case 6:
        diasemanatexto ='sabado'
        break

}
// if (diasemana === 0){
//     diasemanatexto ='domigo'
// }else if (diasemana === 1){
//     diasemanatexto ='segunda'
// }else if (diasemana === 2){
//     diasemanatexto ='terça'
// }else if (diasemana === 3){
//     diasemanatexto ='quarta'
// }else if (diasemana === 4){
//     diasemanatexto ='quinta'
// }else if (diasemana === 5){
//     diasemanatexto ='sexta'
// }
// else if (diasemana === 6){
//     diasemanatexto ='sabado'
// }


console.log(diasemana, diasemanatexto)