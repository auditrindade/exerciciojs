//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é admin; e a senha é senha123 . Exiba uma mensagem indicando se o login
//foi bem-sucedido ou não.

//solicita um nome de usuario
let username = prompt("Digite um nome de usuario.");




//solicite ao usuario uma senha.
let senha = prompt("Digite a senha");





//verifique se o nome do usuario e admin e a senha e "senha123."
//caso sim-> exiba a mensagem de login bem sucedida.
//caso nao-> exiba mensagem de usuario ou senha incorreta.

//if usar quando tiver uma condicional, pra confirmar certou ou verdadeiro, por ex.
// && usar quando tiver que verificar mais de uma condicao.
// == verifica se e verdadeiro ou falso,so verifica valor
// === verifica valor e tipo de dado
//https://dontpad.com/lista-if


if( username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido");
}else{
   console.log("username incorreto")
}