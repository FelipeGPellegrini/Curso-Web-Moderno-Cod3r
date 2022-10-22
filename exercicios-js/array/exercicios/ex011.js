const elementos = [22, 17, 10, 5, 9, 14, 30] 

function primeiroEultimo () {
    const primeiro = elementos.shift()
    const ultimo = elementos.pop()
    console.log(`Primeiro elemento = ${primeiro}, último elemento = ${ultimo}`)
}

primeiroEultimo()