// capturar evento de submit do formulário.
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
   
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if(!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura){
        setResultado('Altura Invalida', false);
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9){
        return nivel[5];
    }
    
    if ( imc >= 34.9){
        return nivel[4];
    }

    if ( imc >= 29.9){
        return nivel[3];
    }

    if ( imc >= 24.9){
        return nivel[2];
    }

    if ( imc >= 18.5){
        return nivel[1];
    }

    if (imc < 18.5){
        return nivel[0];
    }
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP (){
    const p = document.createElement('p'); //aqui estou criando um parágrafo para que dentro desse parágrafo saio o resultado do IMC.
    return p ;
}

//fazer uma função para que saio o resultado do formulário.
function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //nessa parte eu deixei o 'resultado' em branco para aparecer o 'p' que criei abaixo. 
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
};