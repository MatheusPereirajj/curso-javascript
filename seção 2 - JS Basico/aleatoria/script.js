
/*
entre 0  - 11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite
*/



let numero = 10;
 if ((numero >= 0) && (numero <= 5)) {
    console.log('Sim, este número está entre 0 e 5!')
 } else if ((numero > 5) && (numero <= 10)) {
    console.log('Sim, esse número está entre 5 e 10!')
 }else if (numero > 10 && numero <= 15) {
    console.log('Sim, esse número está entre 10 e 15!')
 }else {
    console.log('Esse número não está registrado.')
 };
