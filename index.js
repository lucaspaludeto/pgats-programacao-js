/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informações de um dog que nao mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5 
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


// hoisting -> içamento ou elevação

const irmaos = ["Thor", "Hela"]
console.table(irmaos)


/**
 * Tipos de dados
 
 String - cadeia
 Number - inteiro/real
 Boolean - logico
 Array - vetor/matriz

 undefined
 null

 BigInt = Number para números extremamente grandes

/**
 * Strings
 */

//'Turma 02 do PGATS' - aspas simples ou single quote
//"Turma 02 do PGATS" - aspas duplas ou double quote
//`Turma 02 do PGATS` - template strings 

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")

console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`)

console.log(data.length)

//Split - separar a string
const nomesDeAlunos = "Lucas Paludeto Karina"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")
console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

console.log(nomesDeAlunos.includes("Lucas"))
console.log(nomesDeAlunos.toLowerCase().includes("lucas"))

console.log(nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogicas = "     inteiro real cadeia de caracteres... "
console.log(conceitosLogicas.trim())

let dataParaCortar = "05 de Abril"
console.log(dataParaCortar.slice(0, 2))

const cpf = "98765432123"
console.log(cpf.slice(3, 5))

