const pessoa = {
    nome: 'Matheus',
    sobrenome: ' Pereira',
    idade: '28 anos',
    endereco: {
        rua:'north shopping',
        numero: 33
    }
};

const nome = pessoa.nome + pessoa.sobrenome;
const idade = pessoa.idade;

//caso eu queira acessar o endereço
const { endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);



//caso queira acrescentar algo que não tenha no objeto 'pessoa';
const {cpf = '000.000.000-00', nomeMae = 'Ana Karla', idadeMae = 4100} = pessoa;

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`CPF: ${cpf}`);
console.log(`Nome da Mãe: ${nomeMae}`);
console.log(`Idade da Mãe: ${idadeMae}`);

//quando eu quiser mudar o nome da variável que se encontra dentro do objeto
const eu = {
    nomee: 'joão',
    idade: 100
};

const { nome: apelido = 'maatthheeuuss' } = eu;
console.log(apelido);

