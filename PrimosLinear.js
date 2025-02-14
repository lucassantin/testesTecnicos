function NumerosPrimos(n) {
    // Valida se o número de entrada é um número maior que 1
    if (typeof n !== "number" || n <= 1) {
        throw new Error("Deve ser um número maior que 1.");
    }

    // Gera todos os números até o respectivo número de entrada
    const numeros = [];
    for (let i = 2; i <= n; i++) {
        numeros.push(i);
    }

    // Filtra os números primos.
    const primos = numeros.filter(numero => {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                // retorna que o número não é primo
                return false;
            }
        }
        // retorna que o número é primo e é adicionado ao objeto primos
        return true;
    });

    // Retorna os números primos até o valor n
    return primos;
}

module.exports = NumerosPrimos;


