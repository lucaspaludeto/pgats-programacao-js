/**
 Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 nos.

use os operadores adequados e exiba:
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: Aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade
 */

const cachorros = [
    {
      nomeDog: "Paquita",
      idadeDog: 1,
      pequenoPorte: false
    },
    {
      nomeDog: "Shakira",
      idadeDog: 2,
      pequenoPorte: false
    },
    {
      nomeDog: "Luna",
      idadeDog: 2,
      pequenoPorte: true
    },
    {
      nomeDog: "Rex",
      idadeDog: 1,
      pequenoPorte: true
    }
  ];
  
  const idadeMinima = 2;
  
  for (const cachorro of cachorros) {
    const aptoParaAdocao = (cachorro.idadeDog >= idadeMinima) || cachorro.pequenoPorte;
  
    console.log("Nome do dog:", cachorro.nomeDog);
    console.log("Idade:", cachorro.idadeDog, "ano(s)");
    console.log("Apto para adoção:", aptoParaAdocao ? "Sim" : "Não");
    console.log("----------------------------");
  }
  