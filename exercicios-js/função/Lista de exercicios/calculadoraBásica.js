function calcular(num1, num2, operador) {
    switch(operador){
        case "+":
            return num1 + num2 
            break
        case "-":
            return num1 - num2
            break
        case "*":
            return num1 * num2
            break
        case "/":
            return num1 / num2
            break
        default:
            return "Operação inválida"
    }
}

console.log(calcular(8, 5, "+"))
console.log(calcular(8, 5, "-"))
console.log(calcular(8, 5, "*"))
console.log(calcular(8, 4, "/"))
