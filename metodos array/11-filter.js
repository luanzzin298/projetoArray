let numeros = [10, 25, 5, 30, 15, 40];
let numerosMaioresQue20 = numeros.filter(function(numero) {
/* Retorna 'true' apenas se o 'numero' for maior que 20 */
return numero > 20;
});
console.log("Números Originais:", numeros);
console.log("Maiores que 20 (filter):", numerosMaioresQue20);
// Saída (Originais): [10, 25, 5, 30, 15, 40]
// Saída (Maiores): [25, 30, 40]