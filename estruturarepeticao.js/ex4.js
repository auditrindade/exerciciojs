//4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.


let numero = parseInt (prompt("digite um numero para ver na tabuada"));

if(isNaN(numero)){
    for(let cont = 1; cont<=10; cont++){
        console.log(numero + "x" + "=" + (numero*cont));
    }

}else{
    console.log("numero invalido.Por favor, digite um numero valido.")

}

//console.log(isNaN("Hello world"));// retorna verdadeiro (true)
//console.log(isNaN(123))// retorna falso (false)



//boolean (verdadeiro ou falso)

