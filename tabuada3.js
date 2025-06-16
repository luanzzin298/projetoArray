let prompt = require('prompt-sync')();
let numero = prompt("Digite o número da tabuada: ");
numero = Number(numero);

while (true) {
    if (!isNaN(numero)) {
        break;
    } else {
        console.log("Por favor, digite um número válido.");
    }
}

let senhaCorreta = "Senai123";
let senha;
let tentativas = 0;


while (tentativas < 3) {
    senha = prompt("Digite a senha: ");
    if (senha === senhaCorreta) {
        console.log("\nSenha correta!");
        console.log("\nTabuada do: " + numero);
        for (let i = 0; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
        break;
    } else {
        tentativas++;
        console.log("Senha incorreta. Tentativas restantes: " + (3 - tentativas));
    }
}
if (tentativas === 3 && senha !== senhaCorreta) 
    console.log("\nNúmero máximo de tentativas alcançado. Acesso negado.");

{
    console.log ('\nAdição');
let contador = 1;
while (contador <= 10) {
let resultado = numero + contador ;
console.log(numero + " + " + contador + " = " + resultado);
contador = contador + 1;
}
}

{
    console.log ('\nSubtração');
let contador = 1;
while (contador <= 10) {
let resultado = numero - contador ;
console.log(numero + " - " + contador + " = " + resultado);
contador = contador + 1;
}
}

{
    console.log ('\nDivisão');
let contador = 1;
while (contador <= 10) {
let resultado = Math.ceil(numero / contador) ;
console.log(numero + " / " + contador + " = " + resultado);
contador = contador + 1;
}
}

    