//MUDANDO OS VALORES DAS VARIÁVEIS. 
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//const letras = [b, c, a];
//[a, b, c] = letras;

[a, b, c] = [b, c, a];
console.log(a, b, c);



//               0  1  2  3  4  5  6  7  8 = indice 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, tres, ... resto] = numeros; // essas variáveis que estão entre cochetes, vão receber os valores de acordo com a ordem da array de numeros.

console.log(um, dois, tres);
console.log(resto);

//pegando os valores alternando, um sim e outro não.
const n = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [umm, , tress, , cincoo, , setee, , novee] = n; // essas variáveis que estão entre cochetes, vão receber os valores de acordo com a ordem da array de numeros.

console.log(umm, tress, cincoo, setee, novee);

//                   0              1            2
//                0  1   2       0  1  2     0   1   2
//const num = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];
const num = [ 
    [10, 20, 30], 
    [40, 50, 60], 
    [70, 80, 90] 
];
const [lista1, lista2, lista3] = num;
console.log(lista1[1]);


const nu = [ [10000, 20000, 30000], [40000, 50000, 60000], [70000, 80000, 90000] ];
console.log(nu[2][1])