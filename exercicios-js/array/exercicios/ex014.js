const salarioPorDia = [15, 13, 16, 17, 24, 20, 15, 10]

const TotalSalario = salarioPorDia.reduce(function calcularSalario (valoranterior, valoratual){
    return valoranterior + valoratual
}, 0)

console.log(TotalSalario)