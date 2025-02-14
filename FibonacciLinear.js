function Fibonacci(n) {

  // Valida se o número de entrada é um número e se é maior ou igual a zero.
  if (typeof n !== 'number' || n < 0) {
    throw new Error('O número de entrada deve ser igual ou maior que zero.');
  }

  // Cria o ínicio da sequência de Fibonacci
  const sequence = [0, 1];

  // Gera os números da sequência de Fibonacci até que seja igual ou menor que n
  while (sequence.length <= n) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }

  // confere se o número de entrada é igual a zero e retorna o mesmo ou retorna o último número da sequência
  if (n === 0) {
    console.log(0);
  } else {
    console.log(sequence[sequence.length - 1])
  }
}
// Chamadas de exemplo
Fibonacci(0);
Fibonacci(1);
Fibonacci(2);
Fibonacci(3);
Fibonacci(5);
Fibonacci(6);