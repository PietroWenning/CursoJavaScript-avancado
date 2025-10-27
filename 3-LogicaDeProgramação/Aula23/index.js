/*&& => false && true => false 'o valor mesmo'
|| => true || false => true 'o valor verdadeiro'
FALSY
*false
0
*'' "" `` (string vazia)
*null
*undefined
*NaN (not a number)
 */

const a = 0;
const b = null;
const c = false;
const e = NaN;
console.log(a || b || c ||  e); //retorna o primeiro valor verdadeiro
