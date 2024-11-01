
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container'); 
const div = document.createElement('div'); //criando uma div no HTML

for (let i = 0; i < elementos.length; i++){
    //console.log(elementos[i].tag);  PODERIA FAZER DESSA FORMA, MAS VOU FAZER COM DESESTRUTURAÇÃO.
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    
    
    //tagCriada.innerHTML = texto;
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    
}

container.appendChild(div);