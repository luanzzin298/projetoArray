let listaDeCompras = ['Arroz', 'Feijão', 'Macarrão'];
let textoLista = listaDeCompras.join(', '); /* Junta os itens usando ', ' como separador */
let textoHtml = listaDeCompras.join('</li><li>'); /* Pode ser usado para criar HTML */
console.log("Lista como texto:", textoLista);
// Saída: Arroz, Feijão, Macarrão
console.log("<ul><li>" + textoHtml + "</li></ul>");
// Saída: <ul><li>Arroz</li><li>Feijão</li><li>Macarrão</li></ul>