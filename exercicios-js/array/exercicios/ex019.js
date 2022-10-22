function sortear (numeroEscolhido) {
    let sorteado = Math.round(Math.random() * 10)
    if (sorteado == numeroEscolhido) {
        return `Parabéns, o número sorteado foi o ${sorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${sorteado}`
    }
}

console.log(sortear(2))
console.log(sortear(5))
