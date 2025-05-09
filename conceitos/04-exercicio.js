/**
  Plano de atividade para o Pet
  Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande),
  e o tempo disponível para a atividade representado em minutos. Exemplo:

  Pantera - Médio - 45

  Use uma condicional para decidir o tipo de atividade com base no porte:
  - pequeno -> brincar dentro de casa
  - médio -> caminhada no quarteirão
  - grande -> correr no parque
  - qualquer outro -> porte inválido

  Depois, uma condicional para ajustar a mensagem de acordo com o tempo:
  - menor que 15 -> "atividade rápida: [atividade]"
  - de 15 a 30 -> "tempo ideal: [atividade]"
  - acima de 30 -> "hora da diversão: [atividade]"
 */

  function planoDeAtividade (nome, porte, tempo) {
    let atividade

    //Definindo a atividade com base no porte

    switch(porte) {
        case 'pequeno':
            atividade = 'brincar dentro de casa'
            break;
        case 'médio':
            atividade = 'caminhada no quarteirão'
            break;
        case 'grande':
            atividade = 'correr no parque'
            break;
        default:
            return `porte inválido para ${nome}`
    }

    // Definindo a mensagem com base no tempo
    let mensagemTempo;
    if (tempo < 15) {
        mensagemTempo = `atividade rápida ${atividade}`
    } else if (tempo <= 30) {
        mensagemTempo = `tempo ideal ${atividade}`
    } else {
        mensagemTempo = `hora da diversão ${atividade}`
    }

    return `${nome} - ${mensagemTempo}`
  }

  console.log(planoDeAtividade('paquita', 'médio', 31))