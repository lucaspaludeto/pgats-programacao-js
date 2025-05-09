/**
    Classificador de porte automático
    Muitos tutores não fazem ideia do porte do seu dog.
    Crie um script que classifique o porte com base no peso de forma simplificado, sendo:
    - Até 10Kg -> Pequeno; acima disso -> médio

    Use o operador ternário para determinar o porte. Exiba:
    - Nome
    - Peso
    - Porte classificado

    Extra: transforme a lógica em uma função
 */

    

    const dadosDoDog = () => {
        const nome = 'Paquita';
        const peso = 10;
        const porte = peso <= 10 ? 'Pequeno' : 'Médio';
    
        return {
            nome,
            peso,
            porte
        };
    };
    
    console.log(dadosDoDog());


    // Outra alternativa

    function classificarPortePorPeso(nome, peso) {
        const porte = peso <= 10 ? 'pequeno' : 'médio'

        console.log(`----------`)
        console.log(`Nome: ${nome}`)
        console.log(`Peso: ${peso}`)
        console.log(`Porte: ${porte}`)
        console.log(`----------`)     
    }

    classificarPortePorPeso('Paquita', 11)
    classificarPortePorPeso('Paquita', 10)
    