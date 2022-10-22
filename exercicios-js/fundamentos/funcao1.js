// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 8) //pega os dois primeiros e ignora o restante, pois a função só precisa de dois parâmetros
imprimirSoma()

//função com retorno

function soma(a, b=0) {
    return a + b
}

console.log(soma(2, 6))
console.log(soma(2)) // Vai retornar 2 pois o valor padrão do b foi definido como 0
console.log(soma())