const pai = {nome: "Pedro", corCabelo: "preto"}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Isabella", writable: false, enumerable: true}

})

console.log(filha2.nome)
filha2.nome = "AaaA" // Não pega por conta do writable false
console.log(filha2.nome, filha2.corCabelo)

