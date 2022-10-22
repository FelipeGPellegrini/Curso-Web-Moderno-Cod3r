let nota = 10

switch (nota) {
    case 7: case 8: case 9: case 10:
        console.log("Aprovado com bom aproveitamento.")
        break
    case 6: 
        console.log("Aprovado na média")
        break
    case 5: case 4: case 3: case 2: case 1: case 0:
        console.log("Reprovado")
        break
    default:
        console.log("Valor inválido")
        break
}