let produtos = ['Placa Mãe', 'Processador', 'Memória RAM'];
console.log("Listando com forEach:");
produtos.forEach(function(item, indice) {
/* Para cada 'item', executa esta função. 'indice' é opcional. */
console.log(" Índice " + indice + ": " + item);
});
// Saída:
// Índice 0: Placa Mãe
// Índice 1: Processador
// Índice 2: Memória RAM