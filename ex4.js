//Exercício 4: Notas escolares
//Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
//notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
//notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


//Faça um programa que receba 4 notas de um aluno
alert("Informe as notas de 0 a 10.")

let nota1 = parseFloat(prompt ("digite a primeira nota:"));

let nota2 = parseFloat(prompt("digite a segunda nota:"));

let nota3 = parseFloat(prompt("digite a terceira nota:"));

let nota4 = parseFloat(prompt("digite a quarta nota:"));


//calcule e imprima a média aritmética das notas 
let media = (nota1 + nota2 + nota3 + nota4) /4

console.log ("A media do aluno é: " +media.toFixed(2));



//mensagem de APROVADO para média superior ou igual a 7,0

if (media >=  7.0){
    console.log ("Aprovado");
}


//RECUPERAÇÃO para notas entre 5.0 e 7,0
else if (media >= 5.0 && media <7){
console.log ("Recuperação");
}


//mensagem de REPROVADO para média inferior a 5,0
else if (media < 5.0){
console.log ("Reprovado");
}