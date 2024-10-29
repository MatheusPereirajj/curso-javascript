
function resultado(msg){
    const resul = document.querySelector('.resultado');
    resul.innerHTML = `${diaSemanaTexto}, ${diaDaSemana} de ${mesTexto} de ${ano} a ${hora}:${min}`
}

//dia atual 
const data = new Date();
const diaDaSemana = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = data.getSeconds();

//colocando o zero a esquerda dos minutos.
function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : `${num}`;
}

//switch case com os dias da semana.
function semana(diaDaSemana) {
    let diaSemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto; 
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto; 
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto; 
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto; 
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto; 
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto; 
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
    }   
}

//Descrição dos meses correspondente aos números.
function meses(mes) {
    let mesTexto;
    switch (mes){
        case 0:
            mesTexto = 'Janeiro'
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro'
            return mesTexto;
        case 2:
            mesTexto = 'Março'
            return mesTexto;
        case 3:
            mesTexto = 'Abril'
            return mesTexto;
        case 4:
            mesTexto = 'Maio'
            return mesTexto;
        case 5:
            mesTexto = 'Junho'
            return mesTexto;
        case 6:
            mesTexto = 'julho'
            return mesTexto;
        case 7:
            mesTexto = 'Agosto'
            return mesTexto;
        case 8:
            mesTexto = 'Setembro'
            return mesTexto;
        case 9:
            mesTexto = 'Outubro'
            return mesTexto;
        case 10:
            mesTexto = 'Novembro'
            return mesTexto;
        case 11:
            mesTexto = 'Desembro'
            return mesTexto;  
    }
}
const mesTexto = meses(mes);
const diaSemanaTexto = semana(diaDaSemana)
console.log(resultado())