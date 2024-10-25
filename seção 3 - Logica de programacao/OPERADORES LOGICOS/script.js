/*
OPERADORES LOGICOS

&& -> AND -> E      = é verdadeiro quando todas forem verdadeiro
|| -> OR -> OU      = só é falsa quando todas forem falsa
! -> NOT -> NEGAÇÃO = o que é vdd vira falso e o que é falso vira vdd

*/

console.log(true || true); //TRUE, pq para ser falso precisa todos serem falso.

console.log(true && false); //FALSE, pq para ser VERDADEIRO precisa todos serem TRUE.

console.log(!false);        //o que é vdd vira falso e o que é falso vira vdd.

const usuario = "Matheus";
const senha = '123456';

const vaiLogar = usuario === 'Matheus' && senha === '123456' ;
console.log(vaiLogar);