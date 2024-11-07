//gerando números aleatórios.
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);    
}

const min = 1;
const max = 50;
let rand = 0;

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);   
}

console.log('=======================')// ou 
 do {
     rand = random(min, max);
     console.log(rand);
 } while(rand !== 10);



// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++
// }

// console.log('-----------');

// const nome = 'Matheus';
// let a = 0;
// while(a < nome.length){
//     console.log(nome[a]);
//     a++
// }

