function diaDaSemana (dia) {
    switch(dia) {
        case 1: 
        return "Fim de Semana"
        break
        case 2: case 3: case 4: case 5: case 6:
        return "Dia de semana"
        break
        case 7: 
        return "Fim de semana"
        break
        default: 
        return "Dia inválido (Digite um número de 1 a 7."
    }
}
console.log(diaDaSemana(1))
console.log(diaDaSemana(2))
console.log(diaDaSemana(3))
console.log(diaDaSemana(4))
console.log(diaDaSemana(5))
console.log(diaDaSemana(6))
console.log(diaDaSemana(7))