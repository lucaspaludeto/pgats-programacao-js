// funcoes de seta / flecha

// funcao nomeada, com parâmetro, sem retorno
const exibirNomeDog = (nome) => {
    console.log(nome)
}

// funcao nomeada, com parâmetro + valor default, se, retorno
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}


// funcao nomeada, com parâmetro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

const listarObjetosDog = () => {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    },
    {
        nome: 'Bob',
        peso: 1.5
    }]
}

const listarNomesDeDogs = () => {
    const nomes =[
        'Pituca',
        'Marea',
        'Paquita'
    ]

    console.log(`Passou pela função listarNomesDeDos`)
    return nomes
}

// arrow function sem bloco mas com return 'automatico'
const dobrar = (numero) => numero * 2

exibirNomeDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())


console.log(`---------------`)

listarNomesDeDogs()
const nomesDeDogs = listarNomesDeDogs()

console.log(dobrar(2))