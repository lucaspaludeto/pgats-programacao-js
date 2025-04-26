const cachorro = {
    nome: "bob",
    idade: 5,
    peso: 32.45,
    raca: "tomba lata",
    adotado: false
}

let nomeTag = cachorro.nome.toUpperCase()
let idadeTag = cachorro.idade
let pesoTag = cachorro.peso
let racaTag = cachorro.raca.charAt(0).toUpperCase() + cachorro.raca.slice(1).toLowerCase()
let adotadoTag = cachorro.adotado ? "Sim" : "Não"

const tagInformacoes = `
Nome: ${ nomeTag },
Peso: ${ pesoTag } Kg,
Raça: ${ racaTag}
`

console.log(tagInformacoes)