const aleatorio = ["JavaScript", 3, "HTML", 8]

const apenasNumber = aleatorio.filter(function(conteudo){
    if (typeof conteudo === "number") {
        return conteudo
    }
})

console.log(apenasNumber)