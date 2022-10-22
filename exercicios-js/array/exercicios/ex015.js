const despesas = [
    {produto: "Geladeira", preço: 3500},
    {produto: "Mesa", preço: 700}
]

const totalDepesas = despesas.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.preço
}, 0)

console.log(totalDepesas)