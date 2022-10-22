let number = 0.1 + 0.2
console.log("Número não formatado:", number)

console.log("Número formatado na Raça:","R$", number.toFixed(2).replace(".", ","))

console.log("Formatado para Real", number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))