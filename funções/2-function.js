function gerarCredencial(setor) {
const numeroAleatorio = Math.floor(Math.random() * 1000); // Gera um número entre 0 e 999
const credencial = setor.toUpperCase() + "-" + numeroAleatorio;
// A função devolve a credencial gerada.
return credencial;
}
// --- CHAMADA DA FUNÇÃO ---
// Chamamos a função e passamos o 'setor' como argumento.
// Guardamos o resultado (o valor retornado) em uma variável.
const credencialFinanceiro = gerarCredencial("Financeiro");
const credencialSuporte = gerarCredencial("Suporte");
console.log("Credencial gerada para o Financeiro: ", credencialFinanceiro);
console.log("Credencial gerada para o Suporte: ", credencialSuporte); 