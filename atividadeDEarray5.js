let prompt = require('prompt-sync')();
let livros = ['Harry Potter', 'Os Miseráveis', 'Senhor dos Anéis'];
let titulo = prompt("Digite o título do livro: ");
if (livros.includes(titulo)) {
  console.log("O livro existe na lista!");
} else {
  console.log("O livro não está na lista.");
}
