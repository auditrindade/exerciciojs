//construir um menu onde é possivel escolher um exercicio entre os exercicios anteriores para ser executado.(3 while/3 for)
//faça com que o menu repita a execução, disponibilize as opcoes para o usuario ,até o usuario digitar "sair".

function exercicioTabuada(){
    let numero = parseInt (prompt("digite um numero para ver na tabuada"));

if(!isNaN(numero)){
    for(let cont = 1; cont<=10; cont++){
        console.log(numero + "x" + "=" + (numero*cont));
    }

}else{
    console.log("numero invalido.Por favor, digite um numero valido.")

}

}

function numerosImpares(){
    for (let num = 0; num<=50; num++){
        if(num%2 !== 0){
            console.log(num)
        }
    }
}

function umAdez (){
    for(let num = 1; num <= 10; num++){
        console.log(num);
}
}

function numerosPares (){
    let num = 0;

console.log("Numeros pares de 0 a 20:")

while(num <= 20){
    if(num%2 == 0){
        console.log(num)
    }
    num++;
}
}

function somaNum (){
    let num = 1;
let soma = 0;

while(num <=100){
    //soma = soma + num;
    soma += num;
    console.log(soma)
    num++
}
}

function idade(){
    let idade = parseInt(prompt("Informe a idade:")) 

while(idade < 18){
    idade = parseInt(prompt("Voce e menor de idade, por favor digite sua idade novamente."));
}

console.log("Voce e maior de idade.Sua idade e:" + idade);
}

let opcao;

do{
    opcao = prompt("Menu\n Digite a opção desejada:\n\n1 - Exercicio Tabuada \n\n2 - Exercicio numeros impares \n\n3 - Imprimir numeros de 1 a 10 \n\n4 - numeros pares de 0 a 10 \n\n5 - soma dos numeros de 1 a 100 \n\n6 - Digite sua idade")
    console.clear()//limpar o console antes da proxima resposta

switch (opcao) {
    case "1":
        exercicioTabuada()
        break;
    case "2":
        numerosImpares()
        break;
    case "3":
            umAdez()
        break;
    case "4":
            numerosPares()
        break;   
    case "5":
            somaNum()
        break;      
    case "6":
            idade()
        break;      
    default:
        break;

}
        
}while(opcao != "sair")