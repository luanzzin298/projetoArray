let prompt = require('prompt-sync')();
let numeros = [10, 15, 20, 25, 30, 35, 40];
let quantidade = parseFloat(prompt('Digite a quantidade de número : '));


for (let i = 0; i < quantidade; i++) 
 {
let novoNumero = parseFloat(prompt('Digite o novo número : ' + ' ' + (i)));
numeros.push(novoNumero);
}
for (i = 0; i<=numeros.length; i++)
{
console.log('A posição ' + i + ' eh ' + [numeros[i]])
}
