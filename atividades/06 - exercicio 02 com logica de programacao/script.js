//escreva uma função chamada ePaisagem que recebe
//dois argumentos, Largura e Altura de uma imagem.
//retorne true se a img estiver no 
//modo paisagem(1.080x608).

function ePaisagem (l,a) {
    if(l > a ){
        return true
    }else {
        return false
    };
};
console.log(ePaisagem(1080,608))
console.log('=======================');



function ePaisagem1 (l,a) {
    return l > a;
}
console.log(ePaisagem1(1090,609));
console.log('=======================');



const epaisagem2 = (l, a) => l > a ;
console.log(epaisagem2(10,608));
console.log('=======================');