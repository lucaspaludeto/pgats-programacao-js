/**
 Controle de petiscos
 Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
 Use a estrutura de repetição for contado.

 Exiba:
 - Cada vez que um petisco for entregue
 - Quando o dog estiver satisfeito

 Extra: transforme a lógica em uma função   
 */

 function darPetiscos(quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        console.log(`Petiscos ${i} entregue`)
    }

    console.log("O dog está satisfeito")
 }

 darPetiscos(5)