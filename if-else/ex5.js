//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
//não.


//Escreva um programa que solicita três números ao usuário
let primeiroNumero = parseInt(prompt("Digite primeiro numero:"));

let segundoNumero = parseInt(prompt("Digite segundo numero"));

let terceiroNumero = parseInt(prompt("Digite terceiro numero"));


//e verifica se eles estão em ordem crescente.

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log("Os numeros estao em ordem crescente!!!")
}
else{
    console.log("Os numeros Nao estao em ordem crescente!!!")
}


//Desafio
//Informe se os numeros informado estao em
//ordem crescente / decrescente/ nao ordenado