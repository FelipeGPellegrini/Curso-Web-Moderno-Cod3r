function atribuirNota(nota){
    let atribuição = null
    if (nota < 4.9 && nota > 0) {
        atribuição = "Conceito D"
        console.log(atribuição)
    } else if (nota < 6.9 && nota > 0) {
        atribuição = "Conceito C"
        console.log(atribuição)
    } else if (nota < 8.9 && nota > 0) {
        atribuição = "Conceito B"
        console.log(atribuição)
    } else if (nota <= 10 && nota > 0){
        atribuição = "Conceito A"
        console.log(atribuição)
    } else {
        console.log("Nota inválida")
    }
}

atribuirNota(4)
atribuirNota(6)
atribuirNota(8)
atribuirNota(10)
atribuirNota(0)
