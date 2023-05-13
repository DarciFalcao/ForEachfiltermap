// reconstroi array

const carros = [
    { valor: 30000, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata" },
    { valor: 30000, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Branco" },
    { valor: 30000, marca: "Volkswagen", modelo: "Golf", ano: 2021, cor: "Azul" },
    { valor: 30000, marca: "Ford", modelo: "Mustang", ano: 2022, cor: "Vermelho" },
    { valor: 30000, marca: "Chevrolet", modelo: "Camaro", ano: 2020, cor: "Amarelo" },
    { valor: 30000, marca: "BMW", modelo: "X5", ano: 2018, cor: "Preto" },
    // Adicione mais objetos de carro aqui, se necessário
];

// let marcas = carros.map((carro)=>{
//     return carro.marca
// })
// alert(marcas)

const carrosMap = carros.map((carro)=>{
    carro.valor = ` R$${carro.valor}`
    return carro
})

alert(carrosmap)
