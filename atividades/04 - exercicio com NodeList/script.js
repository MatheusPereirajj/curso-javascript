//atividade é adicionar a cor do fundo de <p> e mudar a cor da letra para branco. 

// const paragrafos = document.querySelector('.paragrafos');
// const ps = document.querySelectorAll('p');


// const styleBody = getComputedStyle(document.body);
// const backgroundColorP = styleBody.backgroundColor;
// console.log(backgroundColorP);

// for( let p of ps){
// p.style.backgroundColor = backgroundColorP;
// p.style.color = '#fff'
// console.log(p);
// }

const ps = document.querySelectorAll('p');

for(let p of ps){
    p.style.background = '#375';
    p.style.color = '#fff';
    console.log(p);
}