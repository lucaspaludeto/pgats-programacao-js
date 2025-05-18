/**
 listaDeAlunos
    Matheus
    Renata
    Leandro
    Ana
    Lucas

    paraCada (item da) listaDeAlunos
        // dar uma nota aleatória  

 */


const listaDeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

listaDeAlunos.forEach(aluno => {
    console.log((aluno))
})

const listaDeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 7
    },
    {
        nome: 'Leandro',
        nota: 7
    },
    {
        nome: 'Ana',
        nota: 7
    },
    {
        nome: 'Lucas',
        nota: 7
    }   
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})

