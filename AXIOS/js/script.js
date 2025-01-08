//1 - INSTALAÇÃO
console.log(axios);

//2 - PRIMEIRO PASSO
const getData = async() => {
    try {

       const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");
       console.log(resposta);
       return resposta.data; 

    } catch (erro) {
        console.log(erro)
    }
};
getData();

//imprimindo dados na tela com DOM.
const container = document.querySelector("#user-container");

const printData = async() => {
    const data = await getData();
    
    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");
        
        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);
        
        container.appendChild(div);

    });
}
printData();
