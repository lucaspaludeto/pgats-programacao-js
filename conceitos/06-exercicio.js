/**
Hands-on
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata .
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  

 */

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++
        }
    }

    return contador;
}

const textoExemplo = "hoje é sexta-feira, 09 de maio de 2025."
console.log(contarVogais(textoExemplo))