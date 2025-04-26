  function padronizarNome(nome) {
    return nome
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") // Tira símbolos de acento
      .replace(/-/g, " ") // Troca hífens por espaço
      .replace(/[^a-zA-Z\s]/g, "") // Remove símbolos restantes
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .split(" ")
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
  }
  
  const nomes = [
    "  jOãO   dA silVA123 ",
    "maria-das-dores!!!",
    "ÁNGELO    COSTA"
  ];
  
  nomes.forEach(original => {
    const formatado = padronizarNome(original);
    console.log(`Original: "${original}" → Formatado: "${formatado}"`);
  });
  