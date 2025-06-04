let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
let indiceRam = produtos.indexOf('Memória RAM'); /* Procura por
'Memória RAM' */
let indiceHd = produtos.indexOf('HD'); /* Procura por algo que não
existe */
console.log("Índice da RAM:", indiceRam); // Saída: 2
console.log("Índice do HD:", indiceHd); // Saída: -1