// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: nom, idade: i = 0} = pessoa
console.log(nom, i)

const {sobrenome, bemHumorada:humor = true} = pessoa
console.log(sobrenome, humor) 

const {endereco: { logradouro, numero:n = "S/N"}} = pessoa
console.log(logradouro, n)