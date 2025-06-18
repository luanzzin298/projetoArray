let nomes = ["Ana", "Carlos", "Mariana", "Pedro"];
nomes.push("Sofia");
console.log(nomes)
let nomeRemovido = nomes.shift();
console.log(' nomeRemovido ' +  nomeRemovido )
let indiceMariana = nomes.indexOf("Mariana");
console.log("Índice de Mariana: " + indiceMariana);
let nomesComM = nomes.filter(function(nome) {
  return nome.startsWith("M");
});
console.log("Nomes com M: " + nomesComM);
  
 