//observação: quando usamos RETURN dentro de um bloco de funções, será necessário executar dentro do console.log na parte de fora do bloco. 
//[EXEMPLO!!]
function hora(){
    const h = 10;

    if(h < 12){
        return "Bom Dia!"
    };
};

console.log(hora());

//observação: quando NÃO usamos o RETURN dentro de um bloco de funções, NÃO será necessário executar dentro do console.log fora do bloco.
//[EXEMPLO!!]
function horaa(){
    const ho = 13;

    if(ho > 12){
        console.log("Boa Tarde!")
    };
};

horaa();


function tempo(){
    const t = 15;

    if(t > 0 && t < 12){
        console.log("BOM DIA!!")
    }else if(t >= 12 && t < 18){
        console.log("BOA TARDE!!")
    }else if(t >= 18 && t < 24){
        console.log("BOA NOITE!!")
    }else {
        console.log("Olá!")
    }
};
tempo();