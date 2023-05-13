const carros = [
    { valor: 30000, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata", cidade: "São Paulo" },
    { valor: 30000, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Branco", cidade: "São Paulo" },
    { valor: 30000, marca: "Volkswagen", modelo: "Golf", ano: 2021, cor: "Azul", cidade: "São Paulo" },
    { valor: 30000, marca: "Ford", modelo: "Mustang", ano: 2022, cor: "Vermelho", cidade: "São Paulo" },
    { valor: 30000, marca: "Chevrolet", modelo: "Camaro", ano: 2020, cor: "Amarelo", cidade: "São Paulo" },
    { valor: 30000, marca: "BMW", modelo: "X5", ano: 2018, cor: "Preto", cidade: "São Paulo" },
    // Adicione mais objetos de carro aqui, se necessário
];

// 1---------------------------
// const carrosString = carros.map((carro)=>{
    
//     return carro.modelo
// })
// alert(JSON.stringify(carrosString))

// alert(JSON.stringify(carrosString))

// 2 -----------------------


// const carrosString = carros.map((carro)=>{
//     delete(carro.cor)
//     return carro

// })
// alert(JSON.stringify(carrosString))

// 3 -----------------------

// const filtrarCarros = carros.filter((carro)=>{
    
//     return carro.cor == "Preto" && carro.ano >= 2018 && carro.ano <= 2020
    

// })

// alert(JSON.stringify(filtrarCarros))

// 4--------------------------

// const filtrarCarros = carros.filter((carro)=>{
    
//     return carro.modelo.charAt(0) == "C" && carro.cidade == "São Paulo"

// })

// alert(JSON.stringify(filtrarCarros))

// 5--------------------

// const carrosMsgPerso = carros.map((carro,)=>{
//     return  `Este é um ${carro.marca} modelo ${carro.modelo} fabricado em ${carro.ano} `

// })

// alert(JSON.stringify(carrosMsgPerso))

// 6
// const carroCidadeCor = carros.map((carro,)=>{

//     return `${carro.cidade} e ${carro.cor}`
    

// })

// alert(JSON.stringify(carroCidadeCor))

