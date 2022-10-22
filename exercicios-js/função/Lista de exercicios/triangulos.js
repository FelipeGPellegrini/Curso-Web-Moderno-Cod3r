function verificarTriangulo(a, b, c){
    if (a > b+c || b > a+c || c > a+b) {
        console.log("Não é um triângulo. Por favor, Digite valores válidos")
    } else if(a == b && a == c){
        console.log("É um triângulo equilátero")
    } else if(a != b && a != c && b != c) {
        console.log("É um triângulo escaleno")
    } else {
        console.log("É um triângulo isósceles")
    }

    

}

verificarTriangulo(20, 5, 7) //Não é triângulo
verificarTriangulo(15, 15, 15) 
verificarTriangulo(10, 9, 8)
verificarTriangulo(10, 10, 8)


