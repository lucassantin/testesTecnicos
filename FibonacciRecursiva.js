function FibonacciRecursiva(n) { 
    // Valida se o número de entrada é um número e se é maior ou igual a zero.
    if (typeof n !== 'number' || n < 0) {
        throw new Error('O número de entrada deve ser igual ou maior que zero.');
    }

    // valores padrão para o inicio da sequencia
    if (n <= 1) {
        return n;
    }

    // recursividade
    return FibonacciRecursiva(n - 1) + FibonacciRecursiva(n - 2);
}

module.exports = FibonacciRecursiva;

 