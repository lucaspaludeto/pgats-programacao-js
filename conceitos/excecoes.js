try {
    console.log(`Tentando alimentar o Pet...`)
    // throw new Error()

    // TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
} catch (excecao) {
    console.log(excecao)

    // CAPTURAR A EXCESSAO

} finally {
    console.log(`SEMPRE SEREI EXECUTADO`)

    // FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
}
