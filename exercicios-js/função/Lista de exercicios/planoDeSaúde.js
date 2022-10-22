function planoDeSaude (idade) {
    let precoFixo = 100
    let total = 0
    if (idade < 10) {
        total = precoFixo + 80
        return total
    } else if (idade <= 30) {
        total = precoFixo + 50
        return total
    } else if (idade <= 60) {
        total = precoFixo + 95
        return total
    } else {
        total = precoFixo + 130
        return total
    }
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(18))
console.log(planoDeSaude(59))
console.log(planoDeSaude(75))