let prompt = require('prompt-sync')();

console.log('\n=== Calculadora Simples ===\n');
console.log('Escolha a Operação\n');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');
console.log('\n=== Calculadora Simples ===\n');

// Armazena a operação desejada
let operacao = prompt('Digite a operação desejada, (1 a 4): ');
console.log('Escolha a operação desejada: ', operacao);

// Solicitação dos valores
let numero1 = prompt('Digite o primeiro número: ');


while (isNaN(numero1)) {
    console.log("NÃO É POSSÍVEL, DIGITE APENAS NÚMEROS");
    numero1 = prompt('Digite o primeiro número: ');
}
numero1 = parseFloat(numero1);

let numero2 = prompt('Digite o segundo número: ');
while (isNaN(numero2)) {
    console.log("NÃO É POSSÍVEL, DIGITE APENAS NÚMEROS");
    numero2 = prompt('Digite o segundo número: ');
}
numero2 = parseFloat(numero2);

// Verificação para divisão por zero
if (operacao === '4') {
    while (numero2 === 0) {
   console.log("INVÁLIDO, TENTE OUTRO NÚMERO.");
  numero2 = prompt('Digite o segundo número novamente: ');
   while (isNaN(numero2)) {
   console.log("NÃO É POSSÍVEL, DIGITE APENAS NÚMEROS");
    numero2 = prompt('Digite o segundo número novamente: ');
  }  numero2 = parseFloat(numero2);
   }
}

let resultado;

// Cálculo da operação desejada
switch (operacao) {
    case '1':
  resultado = numero1 + numero2;
 console.log("O resultado da soma eh: ", resultado);
 break;

  case '2':
    resultado = numero1 - numero2;
  console.log("O resultado da subtração eh: ", resultado);
break;

  case '3':
    resultado = numero1 * numero2;
   console.log("O resultado da multiplicação eh: ", resultado);
   break;

 case '4':
    resultado = numero1 - numero2;
  console.log("O resultado da divisão eh: ", resultado);
break;

default:
    console.log('ERRO! Operação inválida.');
    break;
}


