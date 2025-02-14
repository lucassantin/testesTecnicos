// Fibonacci Linear 

const FibonacciLinear = require('./FibonacciLinear');
console.log('Chamada teste da função Fibonacci Linear');


console.log('N: 0 - Fibonacci Linear:' , FibonacciLinear(0)) ;
console.log('N: 1 - Fibonacci Linear:' , FibonacciLinear(1));
console.log('N: 2 - Fibonacci Linear:' , FibonacciLinear(2));
console.log('N: 3 - Fibonacci Linear:' , FibonacciLinear(3));
console.log('N: 5 - Fibonacci Linear:' , FibonacciLinear(5));
console.log('N: 6 - Fibonacci Linear:' , FibonacciLinear(6));

// Fibonacci Recursiva

const FibonacciRecursiva = require('./FibonacciRecursiva');
console.log('Chamada teste da função Fibonacci Recursiva');

console.log("N: 0 - Fibonacci Recursiva:" ,FibonacciRecursiva(0)); 
console.log("N: 1 - Fibonacci Recursiva:" ,FibonacciRecursiva(1)); 
console.log("N: 2 - Fibonacci Recursiva:" ,FibonacciRecursiva(2)); 
console.log("N: 3 - Fibonacci Recursiva:" ,FibonacciRecursiva(3)); 
console.log("N: 5 - Fibonacci Recursiva:" ,FibonacciRecursiva(5)); 
console.log("N: 6 - Fibonacci Recursiva:" ,FibonacciRecursiva(6)); 
console.log("N: 10 - Fibonacci Recursiva:" ,FibonacciRecursiva(10));

// Numeros primos Linear

const NumerosPrimos = require('./PrimosLinear');
console.log('Chamada teste da função Numeros primos Linear');

console.log("N: 2" ,NumerosPrimos(2));  
console.log("N: 3" ,NumerosPrimos(3));  
console.log("N: 10" ,NumerosPrimos(10)); 

// Numeros primos Recursiva

const NumerosPrimosRecursiva = require('./PrimosRecursiva');
console.log('Chamada teste da função Numeros primos Recursiva');

console.log("N: 2" ,NumerosPrimosRecursiva(2)); 
console.log("N: 3" ,NumerosPrimosRecursiva(3));  
console.log("N: 10" ,NumerosPrimosRecursiva(10));



