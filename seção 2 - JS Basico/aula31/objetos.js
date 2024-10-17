
//CRIANDO OBJETO:
// const pessoa1 = {
//     nome: 'Matheus',
//     sobrenome: 'Pereira',
//     idade: 28,
// };
// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)



//FUNÇÕES + OBJETOS
function criandoPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade };
};

const pessoa1 = criandoPessoa('Matheus', 'Pereira', '28 anos')
const pessoa2 = criandoPessoa('Karla', 'Pereira', '46 anos')
const pessoa3 = criandoPessoa('Julia', 'Pereira', '6 anos')
const pessoa4 = criandoPessoa('Sofia', 'Pereira', '6 anos')

console.log(pessoa1.nome, pessoa1.idade)
console.log(pessoa2.nome, pessoa2.idade)
console.log(pessoa3.nome, pessoa3.idade)