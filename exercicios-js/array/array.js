console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia")
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort() //Deixa o array em ordem alfabética, de acordo com a codificação de caracteres do Unicode
console.log(aprovados)

delete aprovados[1] // O aprovados de índice 1 fica como undeffined
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 2, "Elemento1", "Elemento2")
console.log(aprovados)