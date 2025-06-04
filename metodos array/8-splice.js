let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
// Exemplo 1: Remover 'Memória RAM'
// A partir do índice 2, remove 1 item.
produtos.splice(2, 1);
console.log("Após remover RAM:", produtos); // Saída: ['Placa Mãe', 'Processador', 'SSD']
// Exemplo 2: Adicionar 'HD' depois de 'Processador'
// A partir do índice 2, remove 0 itens e adiciona 'HD'.
produtos.splice(2, 0, 'HD');
console.log("Após adicionar HD:", produtos); // Saída: ['Placa Mãe', 'Processador', 'HD', 'SSD']
// Exemplo 3: Substituir 'Processador' por 'CPU Rápida'
// A partir do índice 1, remove 1 item e adiciona 'CPU Rápida'.
produtos.splice(1, 1, 'CPU Rápida');
console.log("Após substituir:", produtos); // Saída: ['Placa Mãe', 'CPU Rápida', 'HD', 'SSD']