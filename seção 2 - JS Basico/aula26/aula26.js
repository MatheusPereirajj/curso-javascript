let num1 = 1;
let num2 = 2.5;

//SOMA DOS NUMBERS.;
// console.log(num1 + num2); 


//CONCATENAÇÃO DO NUM1 COM NUM2, PQ TRANSF NUM1 EM STRING USANDO -- toString() --
// console.log(typeof num1.toString()) // string
// console.log(typeof num1) // ainda é number


// DEIXANDO O NUM1 COM A STRING PERMANENTE.;  
// num1 = num1.toString();
// console.log(typeof num1)


//DEIXAR A NUMERAÇÃO BINÁRIA. --  to.string(2) -- ;
// let a = 100;
// console.log(a.toString(2))


//ARREDONDAR NUMEROS FLUTUANTES.;
// let b = 10.616165814651896;
// console.log(b.toFixed(2)); //só aparecerá 2 casas após a virgula.
// console.log(b.toFixed(3)); //só aparecerá 3 casas após a virgula.


//IDENTIFICANDO SE O NUMERO É INTEIRO OU FLUTUANTE.;
// let a = 10; //true (verdadeiro)
// let b = 10.5; //false (falso)
// console.log(Number.isInteger(a), Number.isInteger(b));


//IDENTIFICANDO QUANDO A CONTA É INVALIDA OU NÃO.;
//let a = 10 * 'ola mundo';
//let b = 10 * '5';
//console.log(a * 'ola mundo'); //o JS vai me retornar 'NaN'.
//MAS TEM COM EU PERGUNTAR AO ''JS'' SE ESSE NUMERO É NaN OU NÃO, 
//SE ELE ME RETORNAR TRUE, É SINAL QUE ELE REALMENTE É NaN.
//console.log(Number.isNaN(a)); // true
//console.log(Number.isNaN(b)); // false (sinal que a conta passou.);

//TRANSFORMANDO STRING PARA NUMBER
// let a = '1';
// a = Number(a);
// console.log(typeof a)


//TRANSFORMANDO NUMBER PARA STRING.
//  


