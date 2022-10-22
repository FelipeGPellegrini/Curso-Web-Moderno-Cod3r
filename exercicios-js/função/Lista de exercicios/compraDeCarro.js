function escolherCarro(car){
    switch (car) {
        case "hatch":
        return "Compra efetuada com sucesso."
        break
        case "sedans": case "motocicletas": case "caminhonetes":
        return "Tem certeza que não prefere este modelo?"
        break
        default:
        return "Não trabalhamos com este tipo de automóvel aqui."
    }   
}

console.log(escolherCarro("hatch"))
console.log(escolherCarro("sedans"))
console.log(escolherCarro("motocicletas"))
console.log(escolherCarro("caminhonetes"))
console.log(escolherCarro("esportivos"))
