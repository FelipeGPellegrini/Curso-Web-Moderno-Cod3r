// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 59.000,
    proprietario: {
    nome: "Raul",
    idade: 56,
    endereço: {
        logradouro: "Rua ABC",
        numero: 123
    }
},
    calcularSeguro: function() {
        //...
    }


}




