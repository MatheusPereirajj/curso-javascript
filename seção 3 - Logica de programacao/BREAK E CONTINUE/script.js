const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let num of numeros){
    //pegando somente os numeros pares
    if(num % 2 === 0 ){
        console.log('pulei os pares')
        continue;
    }
    
    console.log(num);

}
console.log('====================')
//usando break
const n = [10, 12, 11, 15, 20, 54, 87, 1, 2, 3, 5, 6];
for ( let nume of n){
    if(nume === 87){
        break;
    }
    console.log(nume);
};