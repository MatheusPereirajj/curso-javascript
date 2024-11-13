//mostrar hora atual
function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{ hour12: false }); 
};

//passando em milissegundos (1segundo)
const time = setInterval(function(){
    console.log(mostrarHora());
},1000);

//stop em 5segundos.
setTimeout(function(){
    clearInterval(time);
    console.log('Stop');
},3000);