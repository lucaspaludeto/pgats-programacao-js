/**
 Distribuidor de petiscos 
 Você tem uma lista de cães: Pantera, Luna e Thor
 Crie uma mensagem como: "Entregando petisco para Patera"

 Mantenha os dados e a função em arquivos separados; use modularização para organizar.
 */


 function entregarPetiscos(listaDeDogs) {
    listaDeDogs.forEach(dog => {
        console.log(`Entregando petisco para ${dog}`)
    })
 }

 export {
    entregarPetiscos
 }
