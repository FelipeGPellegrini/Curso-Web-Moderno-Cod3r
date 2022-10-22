function media (aluno, nota1, nota2, nota3){
    let mediaArit = (nota1 + nota2 + nota3) / 3
    let situação = "Indefinida"
    if (mediaArit >= 5 && mediaArit <= 10) {
        situação = "Aprovado"
    } else if (mediaArit < 5){
        situação = "Reprovado"
    }
    return `Olá, ${aluno} sua média foi ${mediaArit}, portando você foi ${situação}`
}

console.log(media("Felipe", 9, 8, 10))
console.log(media("Thiago", 4, 5.2, 3))