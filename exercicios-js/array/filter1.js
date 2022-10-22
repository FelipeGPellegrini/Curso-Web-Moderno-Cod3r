const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(produto){
    return produto.preco >= 500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //== true

const FragileCaro = produtos.filter(caro).filter(fragil)

console.log(FragileCaro)