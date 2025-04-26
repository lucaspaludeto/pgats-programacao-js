/**
 &&
 ||
 !
 */

 // &&

const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) //true


// ||
const dog = {
    adotado: false,
    peso: 5.3
}

console.log(true || true) // true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

// !
console.log(true) //true
console.log(!true) //false