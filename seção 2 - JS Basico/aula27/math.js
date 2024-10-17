let  numero = Number(prompt("Digite um Número: ")); //tivemos que fazer a mudança pq o que é digitado no prompt vira STRING, então devemos fazer a transformação do valor que será digitado em um NUMBER.

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;


texto.innerHTML = ' '; //aqui ele vai executar e como não tem nada, ele vai ficar vazio, fazendo com que o placeholder fique vazio. (não vou colocar o [+=])


texto.innerHTML += `<p> olá, agora iremos descobrir várias contas com o número que você escolheu:${numero} </p>`
texto.innerHTML += `<p> Raiz quadrada: ${numero ** .5} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}. </p>`
texto.innerHTML += `<p> ${numero} é NaN: ${Number.isNaN(numero)}. </p>` // é quando não se da para fazer a conta.
texto.innerHTML += `<p> ${numero} Arredondado para baixo é: ${Math.floor(numero)}; </p> `;
texto.innerHTML += `<p> ${numero} Arredondando para cima é: ${Math.ceil(numero)};</p>`;
texto.innerHTML += `<p> ${numero} Com duas casas decimais: ${numero.toFixed(2)};</p>`