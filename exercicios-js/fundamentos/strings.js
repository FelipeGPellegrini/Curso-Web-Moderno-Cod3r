const escola = "Cod3r"

console.log(escola.charAt(4)) //caractere dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //codigo do caractere
console.log(escola.indexOf("3")) //pega o caractere que está na terceira casa

console.log(escola.substring(1)) //pega apartir do 1
console.log(escola.substring(0, 3)) //pega a partir do 0, 3 caracteres

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")
console.log(escola.replace(3, "e")) // substitui todos os 3 por e 

console.log("Ana,Maria,Pedro".split(",")) // transforma para array, no ("") temos q colocar o símbolo q usamos para separar um do outro(nesse caso foi a vírgula)