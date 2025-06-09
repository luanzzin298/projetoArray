let senha;
do {
senha = prompt("Digite sua senha:"); // Executa pelo menos uma vez
} while (senha !== "SENAI123"); // Testa DEPOIS
console.log("Acesso concedido!");