// Seleciona o elemento com ID "titulo" do document.
let titulo = window.document.getElementById("Titulo")

//define a cor do texto do elemento
titulo.style.color = "blue"

//Define a fonte do elemento
titulo.style.fontFamily = "Montserrat"

//Inicisliza uma variavel
let clique = 0

//funcao para contagem de cliques
const somarCliques = () => {
    
    //Incrementou ! na contagem de cliques
    clique++

    //seleciona o botao por querSelection e atualiza a quantidade de cliques do HTML
    document.querySelector("#botao").innerHTML = clique
}
    const adicionarItem = () => {
        //Criar um novo elemento li("item da lista")
        let novoItem = document.createElement("li")

        //Define o texto no item
        novoItem.textContent = "Novo Item"

        //identifica o elemento que vai ser adicionado
        let lista = document.getElementById("minha-lista")

        //adiciona um novo item na lista
        lista.appendChild(novoItem);

    }


    const voltarPagina = () =>{
        window.history.back()
    }

    const fecharPagina = () =>{
        window.close()
    }
