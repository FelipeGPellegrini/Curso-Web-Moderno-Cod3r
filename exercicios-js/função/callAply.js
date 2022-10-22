function saudacao (idade = 1) {
    return `Olá, ${this.name}  ${this.sobrenome} e tenho ${idade} anos`
}


const name1 = {name: "Felipe", sobrenome: "Pellegrini"}

console.log(saudacao.call(name1))
console.log(saudacao.apply(name1))

console.log(saudacao.call(name1, 17))
console.log(saudacao.apply(name1, [18]))