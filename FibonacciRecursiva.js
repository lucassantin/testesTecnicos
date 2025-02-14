function Fibonacci(n) { 
    // Valida se o número de entrada é um número e se é maior ou igual a zero.
    if (typeof n !== 'number' || n < 0) {
        throw new Error('O número de entrada deve ser igual ou maior que zero.');
    }

    // valores padrão para o inicio da sequencia
    if (n <= 1) {
        return n;
    }

    // recursividade
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Chamadas de exemplo
console.log(Fibonacci(0)); // Saída: 0
console.log(Fibonacci(1)); // Saída: 1
console.log(Fibonacci(2)); // Saída: 1
console.log(Fibonacci(3)); // Saída: 2
console.log(Fibonacci(5)); // Saída: 5
console.log(Fibonacci(6)); // Saída: 8
console.log(Fibonacci(10)); // Saída: 55