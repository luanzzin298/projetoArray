let prompt = require('prompt-sync')();

let numero;

// Solicita um número válido para a tabuada
while (true) {
    numero = parseFloat(prompt("Digite o número da tabuada: "));
    if (!isNaN(numero)) {
        break;
    } else {
        console.log("Por favor, digite um número válido.");
    }
}

let senhaCorreta = "SENAI123";
let senha;
let tentativas = 0;

// Permite até 3 tentativas para digitar a senha corretamente
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

// Se as tentativas acabarem e a senha estiver errada
if (tentativas === 3 && senha !== senhaCorreta) {
    console.log("\nNúmero máximo de tentativas alcançado. Acesso negado.");
}

