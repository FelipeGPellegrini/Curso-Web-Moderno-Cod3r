function receberEformatarNota(nota) {
    if (nota > 10) {
        console.log("Escolha uma nota entre 0 e 10")
    }
    else if (nota - Math.floor(nota) > 0.5) {
        return Math.ceil(nota)
    } else {
        return nota
    }
}


console.log(receberEformatarNota(11))
console.log(receberEformatarNota(7.5))
console.log(receberEformatarNota(7.6))