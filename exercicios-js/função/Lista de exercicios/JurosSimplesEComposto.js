function jurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa/100) * tempo 
    let montante = juros + capital
    return montante
}

console.log(jurosSimples(100, 20, 2))

function jurosComposto(capital, taxa, tempo) {
    let montante = capital *(1 + (taxa/100))**tempo
    return montante 
}

console.log(Math.round(jurosComposto(1000, 10, 3)))

