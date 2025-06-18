let numeros = [5, 12, 8, 3, 9];
numeros.sort(function(a, b) {
  return a - b;
});
console.log("Ordem crescente: " + numeros);
let dobro = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Dobro dos números: " + dobro);
let soma = numeros.reduce(function(total, numero) {
  return total + numero;
}, 0);
console.log("Soma total: " + soma);