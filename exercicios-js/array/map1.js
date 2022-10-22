let num = [1, 2, 3, 4]

let resultado = num.map(function(numero, indice){
    return `${indice + 1}) = ${numero * 2}`
})

console.log(resultado)

// Também podemos criar uma função separada e dps invoca-lá no map

let soma = (e) => {
    return e + 10
}

resultado = num.map(soma)

console.log(resultado)