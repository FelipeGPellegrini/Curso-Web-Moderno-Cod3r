let pontos = [8, 25, 17, 15, 19, 28]

let maxPontos = Math.max(...pontos)

let minPontos = Math.min(...pontos)

console.log(`Em sua partida de número ${pontos.indexOf(maxPontos) + 1} de basquete com mais pontuação, Pedro fez: ${maxPontos} pontos.`)

console.log(`Em sua partida de número ${pontos.indexOf(minPontos) + 1} de basquete com menos pontuação, Pedro fez: ${minPontos} pontos.`)
