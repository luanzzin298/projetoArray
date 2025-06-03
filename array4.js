let fichaAluno = [
'Joao da Silva',//texto(nome)
17, // numero(idade)
true, //booleano(matriculado?)
{rua:'Principal', num:123}, //objeto(endereço)
['matematica','portugues','informatica'] // outro array (disciplinas)
];

fichaAluno[3].rua='secundaria'; //outra rua
fichaAluno[3].num='43'; // outro num

console.log("Ficha Completa:", fichaAluno);

