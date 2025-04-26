
const idadeMinima = 2;
function verificarSePodeSerAdotado(idade, porte) {

    const adocao = idade >= idadeMinima 
  
                  ? 'sim'
  
                  : porte === 'P' 
  
                  ? 'sim'
  
                  : 'não'
  
   
  
    // return adocao
  
    console.log(adocao)
  
  }
  
   
  
  // idade 1 + porte M = nao
  
  // idade 2 + porte M = sim, pela idade
  
  // idade 2 + porte P = sim, pela idade
  
  // idade 1 + porte P = sim, pelo porte
  
   
  
  verificarSePodeSerAdotado(1, 'M')
  
  verificarSePodeSerAdotado(2, 'M')
  
  verificarSePodeSerAdotado(2, 'P')
  
  verificarSePodeSerAdotado(1, 'P')