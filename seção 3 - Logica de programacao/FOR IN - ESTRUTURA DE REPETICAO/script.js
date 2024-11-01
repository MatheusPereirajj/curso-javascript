const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Pereira',
    idade: 28
};
//quando eu quero acessar somente um indice
console.log(pessoa.nome);

for(let i in pessoa){
    console.log(i,pessoa[i])
};


//indices         0         1         2
const frutas = ['Maçã', 'Morango', 'Melão'];

//for in
for(let i in frutas){
    console.log(` For in - ${frutas[i]}`); //Maçã Morango Melão
}

for(let i in frutas){
    console.log(`indice - ${i}`); //  indice = 0  1  2
}

//for simples
for(let i = 0; i < frutas.length; i++){
    console.log(`Usando For Simples - ${frutas[i]}`);
}
