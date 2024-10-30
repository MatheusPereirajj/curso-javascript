const resul = document.querySelector('.resultado');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short' //não consigo identificar o pq q n está a parecendo a hora.
}
resul.innerHTML = data.toLocaleString('pt-BR', opcoes);
