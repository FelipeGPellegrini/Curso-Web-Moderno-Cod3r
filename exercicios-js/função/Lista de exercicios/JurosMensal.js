function valorTotal(valorParcial, mes){
    switch(mes){
        case 1: 
        return valorParcial + valorParcial 
        case 2: 
        return valorParcial + valorParcial * (5/100)
        case 3: 
        return valorParcial + valorParcial * (10/100)
        case 4: 
        return valorParcial + valorParcial * (15/100)
        case 5:
        return valorParcial + valorParcial * (20/100)
        case 6: 
        return valorParcial + valorParcial * (25/100)
        case 7: 
        return valorParcial + valorParcial * (30/100)
        case 8: 
        return valorParcial + valorParcial * (35/100)
        case 9: 
        return valorParcial + valorParcial * (40/100)
        case 10: 
        return valorParcial + valorParcial * (45/100)
        case 11: 
        return valorParcial + valorParcial * (50/100)
        case 12: 
        return valorParcial + valorParcial * (55/100)
        default:
        return "Digite um mês válido, 1=Janeiro, 2=Fevereiro..."
    }
}

console.log(valorTotal(1500, 11))
console.log(valorTotal(1500, 3))
console.log(valorTotal(1500, 13))
