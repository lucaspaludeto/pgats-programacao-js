/**
 * Contador de satisfação de passeio
 Crie um script que avise quando o Dog já passeou o suficiente.
 Para saber, vamos considerar que ele se sentirá satisfeito a partir de 5 voltas na quadra.
 Use a estrutura de repetição while

 Exiba: 
 - Qual o número da volta atual
 - Quando o dog estiver satisfeito

 Extra: transforme a lógica em uma função
 */


function passearComODog() {
    let volta = 1
    let voltaParaDogFicarSatisfeito = 5


    while (volta <= voltaParaDogFicarSatisfeito) {
        console.log(`Volta ${volta}`)
        volta++;
    }
    console.log("O dog já está satisfeito")

}

passearComODog();