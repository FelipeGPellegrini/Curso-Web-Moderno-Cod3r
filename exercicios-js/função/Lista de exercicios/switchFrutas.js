function escolhaAFruta(fruta) {
    switch (fruta) {
        case "maçã": 
        console.log("Não vendemos esta fruta aqui")
        break
        case "kiwi":
        console.log("Estamos com escassez de kiwi")
        break
        case "melancia":
        console.log("Aqui está, são 3 reais o quilo")
        break
        default:
        console.log("Erro, digite uma fruta que esteja no sistema.")

    }
}

escolhaAFruta("maçã")
escolhaAFruta("kiwi")
escolhaAFruta("melancia")
