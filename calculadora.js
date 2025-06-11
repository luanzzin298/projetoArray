let prompt = require('prompt-sync')();
// Pede o número da tabuada
let numero = prompt("Qual tabuada você quer?");
// Transforma o que o usuário digitou em número
numero = Number(numero);
// Mostra a tabuada do número escolhido
let contador = 1;
while (contador <= 10) {
  let resultado = numero * contador;
  console.log(numero + " x " + contador + " = " + resultado);
  contador = contador + 1;
}


