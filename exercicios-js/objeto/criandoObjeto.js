// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new produto("Caneta", 7.99, 0.15)
const p2 = new produto("Notebook", 3000, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory 

function criarfuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarfuncionario("João", 7900, 4)
const f2 = criarfuncionario("Maria", 10000, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create 
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') 
console.log(fromJSON.info)
