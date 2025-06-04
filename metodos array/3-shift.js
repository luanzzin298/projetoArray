let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
let primeiroItem = produtos.shift(); /* Remove 'Placa Mãe' e
guarda */
console.log("Após shift():", produtos);
console.log("Item removido:", primeiroItem);
// Saída (Array): ['Processador', 'Memória RAM', 'SSD']
// Saída (Item): Placa Mãe