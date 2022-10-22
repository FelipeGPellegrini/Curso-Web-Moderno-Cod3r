const notas = [6, 8, 9, 10, 8.5]

function notaMaxEMin () {
return `Menor nota: ${Math.min(...notas)}
Maior nota: ${Math.max(...notas)}`
}

console.log(notaMaxEMin())