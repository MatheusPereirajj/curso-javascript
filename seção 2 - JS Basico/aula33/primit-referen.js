/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)
*/



/* 
ex: aqui vai aparecer 'Pereira', pois eu troquei o valor que estava na variável nome para Pereira.

let nome = 'Matheus';
nome = 'Pereira'; 
console.log(nome)
//aqui vai aparecer 'Pereira', pois eu troquei o valor que estava na variável nome para Pereira.
*/


/*
//SE TENTARMOS MUDAR SOMENTE UMA LETRA DA VARILÁVEL, NÃO CONSEGUIRIAMOS.
let nome1 = 'theus'
console.log(nome1[0]);

nome1[0] = 'M';
console.log(nome1[0]); //AQUI AINDA VAI PERMANECER A LETRA 't', PQ STRING É IMUTÁVEL.
*/



/*
Referência (mutável) - Array, Object, Function
*/
let a = [1,2,3]
let b = a

console.log(a, b);

b.push('lelê');
console.log(a, b); 
