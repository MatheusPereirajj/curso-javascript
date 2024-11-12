//Escreva uma função que recebe 2 números e retorne o maior deles.

function max(x, y){
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log(max(20,1));
console.log('===============');




function max1(a, b){
    return a > b ? `${a} é o maior` : `${b} é o maior`;
}
console.log(max1(50,150))
console.log('===============');




const max2 = (x, y) => {
    return x > y ? x : y;
};
console.log(max2( 100, 200));
console.log('===============');





const max3 =(x,y) => x > y ? x : y;
console.log(max3(11,12));
console.log('===============');



