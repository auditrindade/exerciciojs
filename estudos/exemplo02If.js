// solicita o nome do usuário

// Apresenta na tela o nome do usuário 

// Decisao, se for Vanessa apresente "Olá Vanessa" se for Eduardo apresente "Olá Eduardo",
// se não for nenhum dos dois, imprima na tela "Não sei quem é você"


//recebendo o nome do usuario
let nomeUsuario = (prompt("qual o seu nome?"))
    console.log ("Meu nome e:" + nomeUsuario)

//verificando se o nome e Vanessa e mostrando a mensagem de Olá Vanessa ,no console.
if ( nomeUsuario == "Vanessa" ){
    console.log (" Olá Vanessa")
}
//Verificaando se o nome e Eduardo e mostrando a mensagem de Olá Eduardo ,no console.
else if ( nomeUsuario == "Eduardo"){
    console.log ("Olá Eduardo")
}
//verificando se nao é nem Eduardo, nem Vanessa e mostrando a mensagem de Não sei quem é voce ,no console.
else  console.log ("Nao sei quem é voce")