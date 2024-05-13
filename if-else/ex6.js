//Exercício 6: Verificação de idade
//Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
//de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


//Escreva um programa que solicita o ano de nascimento de uma pessoa




let anoNascimento = (prompt("Digite o ano de nascimento:"))
//let anoAtual = 2024;
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade>=18){
console.log("Voce e maior de idade");
console.log("Sua idade e" + Idade);
}
else{
    console.log("Voce e menor de idade");
    console.log("Sua idade e" + idade);
}