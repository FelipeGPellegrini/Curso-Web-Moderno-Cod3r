function pedido(codigo, quantidade) {
    let preco = 0
    let total = 0
    switch (codigo) {
        case 100:
            preco = 3
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        case 200:
            preco = 4
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        case 300:
            preco = 5.50
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        case 400:
            preco = 7.50
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        case 500:
            preco = 3.50
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        case 600:
            preco = 2.80
            total = preco * quantidade
            console.log(`Seu pedido custo um total de R$${total.toFixed(2)}`)
            break
        default:
            console.log("Produto não existe")
    }
}

pedido(100, 2)
pedido(200, 2)
pedido(300, 2)
pedido(400, 2)
pedido(500, 2)
pedido(600, 2)
pedido(700, 2)

