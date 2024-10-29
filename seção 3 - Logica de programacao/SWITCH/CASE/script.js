//usanado break
// switch (nome){
//     case 1: 
//         nome = 'Antonio'
//         nome += ' Matheus'
//     break
    
//     case 2: 
//         nome = ' Pereira'
//         nome += ' da'
//         nome += ' Rocha'
//     break

//     default:
//         nome = 'Antonio Matheus Pereira Da Rocha'
// }

// console.log(`Seu nome é: ${nome}`);


//estou tirando o break 
// let nome = 3;
// switch (nome){
    
//     case 0:
//         nome += 'Qual é '
//         nome += 'o seu nome?'
//     case 1: 
//         nome += ' Antonio'
//         nome += ' Matheus' 
//     case 2: 
//         nome += ' Pereira'
//         nome += ' da'
//         nome += ' Rocha'
//     case 3:
//         nome += '!' 
//     break
//     default:
//         nome = 'ERRO'
// }
// console.log(`${nome}`);


//usando funções 
//dentro de uma função: se colocar o return, não é necessário colocar o break.
function getDiaDaSemana (diaSemana){
let diaSemanaTexto;
 switch (diaSemana){
     case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;

     case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto

     case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto

     case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto

     case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto

     case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto

     case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto
    
     default: //o default é como se fosse o "else" no fim do "else if".
        diaSemanaTexto = '';
        return diaSemanaTexto
 };
}

const data = new Date('1987-04-21');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaDaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto)





//const mes = zeroAEsquerda(data.getMonth());
//const ano = zeroAEsquerda(data.getFullYear());
//console.log(`${diaSemana}`);

// let diaSemanaTexto;
// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// }else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// }else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// }else if (diaSemana === 3){
//     diaSemanaTexto = 'Quarta';
// }else if (diaSemana === 4){
//     diaSemanaTexto = 'quinta';
// }else if (diaSemana === 5){
//     diaSemanaTexto = 'Sexta';
// }else if(diaSemana === 6){
//     diaSemanaTexto = 'Sábado';
// }else {
//     console.log("ERRO!")
// }
// console.log(diaSemana, diaSemanaTexto);