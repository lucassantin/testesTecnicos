function NumerosPrimosRecursiva(n) {
    // Valida se o número de entrada é um número maior que 1
    if (typeof n !== "number" || n <= 1) {
        throw new Error("Deve ser um número maior que 1.");
    }

    // Função recursiva para verificar se um número é primo
    function Primo(numero, divisor = 2) {
        // se a raiz quadrada do numero for menor que 2 significa que ele é primo
        if (divisor > Math.sqrt(numero)) return true;
        // se o resto da divisão do numero pelo divisor for zero significa que ele não é primo
        if (numero % divisor === 0) return false;
        // verificação do proximo valor
        return Primo(numero, divisor + 1);
    }

    // Função recursiva para gerar números primos até n
    function gerarPrimos(numeroAtual, max, primos = []) {
        // caso o numero seja maior que o limite retorna os primos encontrados
        if (numeroAtual > max) return primos;
        // verifico se o numero é primo e o adiciono ao objeto
        if (Primo(numeroAtual)) primos.push(numeroAtual);
        // verificação do proximo número
        return gerarPrimos(numeroAtual + 1, max, primos);
    }

    return gerarPrimos(2, n);
}

module.exports = NumerosPrimosRecursiva


