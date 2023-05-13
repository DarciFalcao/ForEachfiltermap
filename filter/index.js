const pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 35, cidade: "Brasília" },
    { nome: "Carlos", idade: 22, cidade: "Porto Alegre" },
    { nome: "Mariana", idade: 27, cidade: "Salvador" },
    // Adicione mais objetos de pessoas aqui, se necessário
    ];



let arrayFiltrado = pessoas.filter((pessoa)=>{
    // if(pessoa.idade >=25) {
    //     return true
    // } else {
    //     return false
    // }
    return pessoa.idade >= 25
})

