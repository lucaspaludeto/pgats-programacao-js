/**
para, faca
contador; condicao. manipulacao do contador (incremento/decremento)

quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++

 */

const quantidadeCalculada = 3

for (let quantidadeDePetiscos = 0; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    console.log(`Dando o petisco de n° ${quantidadeDePetiscos}`)
}

console.log('---------------------------')

const gatos = ['Leslie', 'Pony', 'Fumaca']

for (let indice = 0; indice < gatos.length; indice++){
    console.log(`Dando o petisco para ${gatos[indice]}`)
}

console.log('---------------------------')



for (let quantidadeDePetiscos = 0; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {

    for(let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para ${gatos[indice]}`)
        console.log(`Dando o petisco de n° ${quantidadeDePetiscos}`)
    }
}