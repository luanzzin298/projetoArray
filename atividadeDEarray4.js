let idades = [15, 22, 18, 17, 20];
let temMaiorDeIdade = idades.some(function(idade) {
  return idade >= 18;
});
console.log("Tem alguém maior ou igual a 18? " + temMaiorDeIdade);

