// console.log mostra a mensagem para o usuario no console.
console.log ("Hello world!!!");


// alert abre janela pop-up para o usuario confirmar com ok.
alert ("Bom dia!!");

//prompt manda uma mensagem e/ou uma pergunta ao usuario com possibilidade de digitacao do mesmo.
prompt ("Como voce esta hoje?");

// um tipo de variavel (caixa)
//let

//criei um tipo de variavel(caixa) com nome de nome usuario, que recebeu um comando para abrir dialogo com usuario.
let nomeUsuario = (prompt("Qual o seu nome?"));

//para exibir a resposta do usuario no console e preciso fazer a concatenacao fora das aspas e dentro do parenteses.
console.log ("Meu nome e:" + nomeUsuario)

// Se o nomeUsuario for Vanessa, entao apresente na tela, "Vanessa gosta de estudar C#". 
// Se o nomeUsuario for Eduardo então apresente na tela "Eduardo gosta de estudar JavaScript"

if ( nomeUsuario == "Vanessa" ){
    console.log (nomeUsuario + " esta dentro da chave")
}

console.log (nomeUsuario + " esta fora da chave")



if ( nomeUsuario == "Eduardo"){
    console.log (nomeUsuario + " gosta de estudar JavaScript")
}



//isnan = verifica se e numero
//console.log(isNan("Hello world"));// retorna verdadeiro (true)
//console.log(isNan(123))// retorna falso (false)
//boolean (verdadeiro ou falso)