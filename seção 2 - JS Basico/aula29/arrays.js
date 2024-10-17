//  arrays       0        1        2          3
const frutas = ['Maçãs', 'Uvas', 'Bananas', 'abacaxi'];

//----ADICIONANDO FRUTAS NO FINAL DA ARRAY;
/*
frutas.push('Morangos');
console.log(frutas);
*/


//----ADICIONAR UMA FRUTA NO INICIO DO ARRAY?
/* 
frutas.unshift('Goiabas') 
*/


//COMO SABER O TAMANHO DA ARRAY?
/*
console.log(frutas);
console.log(frutas.length);
*/


//----COMO SABER QUANTOS OBJETOS TEM NO ARRAY?
/*
console.log(frutas.length);
*/


//----COMO REMOVER O ULTIMO DA LISTA? 
/*
frutas.pop();
console.log(frutas);
*/


//----COMO REMOVER O PRIMEIRO DA LISTA?
/*
frutas.shift();
console.log(frutas);   //aqui estou removendo a maçã.
*/

//----COMO REMOVER OS 2 ULTIMOS DO ARRAY? 
/*
console.log(frutas.slice(0, -2));
*/


//----COMO APARECER SOMENTE OS 2 DO MEIO?
/*
console.log(frutas.slice(1, 3));

eu tive que colocar o numero 3 e não o numero 2 pq o slice pega até antes do numero desejado. EXEMPLO: se eu colocasse o numero 4 da lista, o slice pegaria tbm o numero 3. é como se digitasse "1 até o >3"
*/
