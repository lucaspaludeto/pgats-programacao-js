/**
 Calculadora ração diária

Crie um script que recebe o peso do dog em kg + estoque atual de ração em gramas.
Calcule a quantidade diária de ação com base na seguinte fórmula: Gramas por dia = peso x 30 gramas

Exiba:
- Nome do dog 
- Peso 
- QUantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar
 */  

  const cachorro = 
{
  nomeDoDog: "Paquita",
  pesoDoDog: 20,
  estoqueAtualDeRacao: 6590
};
  
const qtdRacaoDiariaRecomendada = cachorro.pesoDoDog * 30; // 30 gramas por kg
const duracaoEstoque = Math.floor(cachorro.estoqueAtualDeRacao / qtdRacaoDiariaRecomendada);

console.log("Nome do dog:", cachorro.nomeDoDog);
console.log("Peso:", cachorro.pesoDoDog, "kg");
console.log("Quantidade de ração recomendada por dia:", qtdRacaoDiariaRecomendada, "g");
console.log("O estoque atual vai durar aproximadamente:", duracaoEstoque, "dias");

