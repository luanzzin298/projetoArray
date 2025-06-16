let prompt = require('prompt-sync')();

let frutas = ['mamão', 'manga', 'goiaba', 'pera', 'banana'];

console.log('Lista inicial de frutas:');
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let quantidade = parseInt(prompt('Quantas frutas você deseja adicionar? '), 10);

for (let i = 0; i < quantidade; i++) {
  let novaFruta = prompt('Digite o nome da fruta ' + (i + 1) + ': ');
  frutas.push(novaFruta);
}

console.log('\nFrutas atualizadas:');
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


