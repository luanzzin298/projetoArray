let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD', 'Placa de Vídeo'];
let core = produtos.slice(1, 4); /* Copia do índice 1 (Processador) até o 3 (SSD), o 4
não entra! */
let video = produtos.slice(4); /* Copia do índice 4 até o final */
console.log("Core (slice):", core); // Saída: ['Processador', 'Memória RAM', 'SSD']
console.log("Vídeo (slice):", video); // Saída: ['Placa de Vídeo']
console.log("Array Original (não mudou):", produtos); // O original continua igual!