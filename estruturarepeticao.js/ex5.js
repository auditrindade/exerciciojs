5.// Imprimir os primeiros 10 números da sequência de Fibonacci.

//inicializar os primeiros dois numeros da sequencia de Fibonacci.
let fib1 = 1;
let fib2 = 1;

//imprime os primeiros 10 numeros da sequencia Fibonacci
console.log("Os primeiros 10 numeros da sequencia Fibonacci sao:");
console.log(fib1)
console.log(fib2)

//Itera para calcular e imprimir os proximos 8 numeros da sequencia fibonacci
for(let i = 2; i < 10; i++){
    let nextfib = fib1 + fib2;
    console.log(nextfib);

    //atualizar os valores de fib1 e fib2 para os proximos calculos
    fib1 = fib2;
    fib2 = nextfib;
}