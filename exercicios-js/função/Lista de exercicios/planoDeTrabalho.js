function planoDeTrabalho(plano, salario) {
    let aumento = 0
    switch (plano) {
        case "A":
            aumento = 10
            return salario * (1 + aumento / 100)
            break
        case "B":
            aumento = 15
            return salario * (1 + aumento / 100)
            break
        case "C":
            aumento = 20
            return salario * (1 + aumento / 100)
            break
        default:
            return "Plano de trabalho inválido"
    }
}

console.log(planoDeTrabalho("A", 1500).toFixed(2))
console.log(planoDeTrabalho("B", 1500).toFixed(2))
console.log(planoDeTrabalho("C", 1500).toFixed(2))
console.log(planoDeTrabalho("D", 1500))