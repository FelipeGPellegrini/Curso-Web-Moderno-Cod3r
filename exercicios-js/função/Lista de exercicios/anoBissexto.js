function bissexto (ano) {
    if (ano <= 0)   {
        console.log("Ano inválido")
    } else if (ano % 400 == 0) {
        console.log(ano, "É um ano bissexto")
    } else if (ano % 100 == 0) {
        console.log(ano, "Não é um ano bissexto") 
    } else if (ano % 4 == 0) {
        console.log(ano, "É um ano bissexto")
    } else {
        console.log(ano, "Não é um ano bissexto")
    }

}

bissexto(2020)
bissexto(2019)
bissexto(200)