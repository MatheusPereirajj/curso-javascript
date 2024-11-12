/*
- escreva uma função que receba um numero e retorne o seguinte: 
- divisivel por 3 = Fizz;
- divisivel por 5 = Buzz;
- divisivel por 3 e 5 = FizzBuzz;
- NÃO divisivel por 3 e 5 = retornar o próprio número;
- checar se um numero é realmente um número = retornar o proprio numero;
- use for de 0 a 50;
*/

function base(n){
    
    if (typeof n !== 'number') return `${n} NÃO É NÚMERO`;
    
    if(n % 3 === 0 && n % 5 === 0) return `FizzzBuzzz`;

    if(n % 3 === 0) return `Fizz`;

    if(n % 5 === 0) return `Buzz`

    return n;
};

console.log('a', base('a'));

for (let i = 0; i <= 50; i++) {
    console.log(i, base(i));
}

