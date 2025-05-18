function removerStrings(lista) { 
    return lista.filter(item => typeof item === 'number' && Number.isInteger(item)); 
} 

const listaInteirosEStrings = [1, "dois", 3, "quatro", 5, "seis", 0, "99", 150, "oito", 3.5, 0.0999]; 
const listaApenasInteiros = removerStrings(listaInteirosEStrings); 
console.log(listaApenasInteiros);