/*
const umDia = 60 * 60 (1hr) * 24 (umdia) * 1000;  (um dia em milesimos de segundos.)
const tresHoras = 60 * 60 * 3 * 1000 ; 60seg * 60seg * 3hr * 1000milisegundos
const data = new Date(0 + tresHoras + umDia); marco 0 = 01.01.1970.
*/

/*
const data = new Date('1996-08-30 20:20:59'); //dateString()
console.log('Dia', data.getDate()); //aqui, estou pedindo somente o dia.
console.log('Mês', data.getMonth()); //aqui, estou pedindo somente o Mês. [0 = janeiro / 11 = dezembro]
console.log('Ano', data.getFullYear()); //aqui, estou pedindo somente o Ano.
console.log('Hora', data.getHours()); //aqui, estou pedindo somente o Hora.
console.log('Minutos', data.getMinutes()); //aqui, estou pedindo somente o Minutos.
console.log('Segundos', data.getSeconds()); //aqui, estou pedindo somente o Segundos.
console.log('Dia Da Semana', data.getDay()); //aqui, estou pedindo somente o diaDaSemana. [0 = domingo / 6 = sábado]
console.log(data.toString());
*/

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia} - ${mes} - ${ano} // ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);