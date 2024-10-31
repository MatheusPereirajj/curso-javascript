//ESTRUTURA DE REPETIÇÃO;
// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//incrementando. (i++)
for (let i = 0; i <= 5; i++){
    console.log('linha',i)
}

//decrementando.(i--)
for (let i = 5; i >= 0; i--){
    console.log('linha',i)
}

//pulando de 2 em 2 ou qlqr outro numero que você deseja. (+=)
for (let i = 0; i <= 100; i += 10){
    console.log('linha',i)
}

//checando se o numero é par. (deverá usar if)
for (let i = 0; i < 10; i++ ){
    const par = i % 2 === 0 ? `${i} - PAR` :  `${i} - IMPAR`;
    console.log(par)
}

//usando FOR junto com ARRAY.
const frutas = ['Maçã', 'Uva', 'Melão', 'Goiaba', 'Mamão', 'Morango'];

for(let i = 0; i < frutas.length; i++){
    console.log('Indice', i, frutas[i])
}
